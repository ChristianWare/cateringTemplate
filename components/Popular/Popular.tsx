"use client";

import styles from "./Popular.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import Image from "next/image";
import Img from "../../public/images/pizza2.png";
import Img2 from "../../public/images/pizza.png";
import Img3 from "../../public/images/buerger.png";
import Img4 from "../../public/images/burger2.png";
import { IRoom } from "../../backend/models/room";
import PropPreviewii from "../PropPreviewii/PropPreviewii";
import Label from "../Label/Label";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

// const data = [
//   {
//     id: 1,
//     title: "Pepperoni Feast Pizza",
//     src: Img,
//     price: "14.99",
//   },
//   {
//     id: 2,
//     title: "Margherita Pizza",
//     src: Img2,
//     price: "12.99",
//   },
//   {
//     id: 3,
//     title: "Smoky BBQ Bacon Burger",
//     src: Img3,
//     price: "10.99",
//   },
//   {
//     id: 4,
//     title: "Classic Cheeseburger",
//     src: Img4,
//     price: "8.99",
//   },
// ];

const Popular = ({ data }: Props) => {
  const { rooms } = data;
  console.log(rooms);

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Most Requested</h2>
          </div>
          <div className={styles.bottom}>
            {rooms.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  <Image
                    src={
                      x?.images?.length > 0
                        ? x.images[0].url
                        : "/images/default_room_image.jpg"
                    }
                    alt=''
                    fill
                    className={styles.img}
                  />
                </div>
                <Label text={x.category} color='category' />
                <div className={styles.info}>
                  <h3 className={styles.title}>{x.name}</h3>
                  <p className={styles.price}>{x.description}</p>
                  {/* <p className={styles.price}>{x.category}</p> */}
                  <div className={styles.btnContainer}>
                    <Button btnType='primaryiii' text='More Details' href='/' />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnContainerii}>
            <Button btnType='primaryiii' text='See Entire Menu' href='/' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Popular;
