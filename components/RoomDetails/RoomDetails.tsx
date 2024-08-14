"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./RoomDetails.module.css";
import { IRoom } from "../../backend/models/room";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";
import ImageGrid from "../ImageGrid/ImageGrid";
import GalleryGrid from "../GalleryGrid/GalleryGrid";
import FalseButton from "../FalseButton/FalseButton";
import Label from "../Label/Label";

interface Props {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data }: Props) => {
  const { room } = data;

  const nutrition = [
    {
      id: 1,
      title: "Carb",
      value: "20g",
    },
    {
      id: 1,
      title: "Calorie",
      value: "141 cal",
    },
    {
      id: 1,
      title: "Fat",
      value: "20g",
    },
    {
      id: 1,
      title: "Protien",
      value: "36g",
    },
  ];

  return (
    <>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 className={styles.heading}>{room?.name}</h1>

          <div className={styles.price}>
            $ {room?.pricePerNight}{" "}
            <span className={styles.perNight}>/ per person</span>
          </div>
          <div className={styles.nutritionBox}>
            {nutrition.map((x) => (
              <div key={x.id} className={styles.nutrition}>
                <h6>
                  {x.title}: {x.value}
                </h6>
              </div>
            ))}
          </div>
        </div>
        <ImageGrid images={room?.images} text={room?.category} />
        <div className={styles.propDetails}>
          <div className={styles.left}>
            <p className={styles.copy}>{room?.description}</p>
          </div>
          <div className={styles.right}>
            {/* <BookingDatePicker room={room} /> */}
          </div>
        </div>
        <br />
        <br />
        <GalleryGrid images={room?.images} />

        <br />
        <br />
      </LayoutWrapper>
    </>
  );
};
export default RoomDetails;
