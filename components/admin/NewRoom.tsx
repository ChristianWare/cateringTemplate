"use client";
import { useNewRoomMutation } from "../../redux/api/roomApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";
import FalseButton from "../FalseButton/FalseButton";
import styles from "./NewRoom.module.css";

interface Props {
  onClick?: () => void;
  onClose?: () => void;
}

const NewRoom = ({ onClick, onClose }: Props) => {
  const [roomDetails, setRoomDetails] = useState({
    name: "",
    price: 0,
    description: "",
    // address: "",
    // googleMapsUrl: "",
    category: "Breakfast",
    // guestCapacity: 1,
    // numOfBeds: 1,
    internet: false,
    breakfast: false,
    airConditioned: false,
    petsAllowed: false,
    roomCleaning: false,
  });

  const {
    name,
    price,
    description,
    // address,
    // googleMapsUrl,
    category,
    // guestCapacity,
    // numOfBeds,
    internet,
    breakfast,
    airConditioned,
    petsAllowed,
    roomCleaning,
  } = roomDetails;

  const router = useRouter();

  const [newRoom, { isLoading, error, isSuccess }] = useNewRoomMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess) {
      // router.push("/admin/rooms");
      router.refresh();
      toast.success("Room created");
      onClose?.();
    }
  }, [error, isSuccess, router, onClose]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const roomData = {
      name,
      pricePerNight: price,
      description,
      // address,
      // googleMapsUrl,
      category,
      // guestCapacity: Number(guestCapacity),
      // numOfBeds: Number(numOfBeds),
      // isInternet: internet,
      isBreakfast: breakfast,
      IsAirConditioned: airConditioned,
      IsPetsAllowed: petsAllowed,
      IsRoomCleaning: roomCleaning,
    };

    newRoom(roomData);
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setRoomDetails({
      ...roomDetails,
      [e.target.name]:
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value,
    });
  };

  const roomFeatures: { name: string; value: keyof typeof roomDetails }[] = [
    { name: "Internet", value: "internet" },
    { name: "Breakfast", value: "breakfast" },
    { name: "Air Conditioned", value: "airConditioned" },
    { name: "Pets Allowed", value: "petsAllowed" },
    { name: "Room Cleaning", value: "roomCleaning" },
  ];

  return (
    <div>
      <h2 className={styles.heading}>New Property</h2>
      <form
        onSubmit={submitHandler}
        encType='multipart/form-data'
        className={styles.container}
      >
        <div className={styles.lableInputBox}>
          <label htmlFor='name_field'>Name</label>
          <input
            type='text'
            id='name_field'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.lableInputBox}>
          <label htmlFor='price_field'>Price</label>
          <input
            type='text'
            id='price_field'
            name='price'
            value={price}
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.lableInputBox}>
          <label htmlFor='description_field'>Description</label>
          <textarea
            id='description_field'
            rows={8}
            name='description'
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>

        <div className={styles.lableInputBox}>
          <label htmlFor='room_type_field'>Category</label>
          <select
            id='room_type_field'
            name='category'
            value={category}
            onChange={onChange}
          >
            {["Breakfast", "Lunch/Dinner", "Dessert"].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.btnContainer}>
          <FalseButton
            btnType='primary'
            text={isLoading ? "Creating..." : "Create Menu Item"}
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};
export default NewRoom;
