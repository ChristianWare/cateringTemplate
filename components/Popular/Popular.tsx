"use client";

import styles from "./Popular.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import Image from "next/image";

import { IRoom } from "../../backend/models/room";
import Label from "../Label/Label";
import { usePathname } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Popular = ({ data }: Props) => {
  const { rooms } = data;

  const pathname = usePathname();

  const displayedRooms = pathname === "/" ? rooms.slice(0, 3) : rooms;

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {pathname !== "/menu" && (
              <h2 className={styles.heading}>What&apos;s Trending</h2>
            )}
          </div>
          <div className={styles.bottom}>
            {displayedRooms.map((x) => (
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
                  <div className={styles.labelContainer}>
                    <Label text={x.category} color='category' />
                  </div>
                </div>
                <h3 className={styles.title}>{x.name}</h3>
                <div className={styles.info}>
                  <p className={styles.price}>{x.description}</p>
                  <div className={styles.btnContainer}>
                    <Button
                      btnType='primaryiv'
                      text='More Details'
                      href={`/properties/${x?._id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {pathname !== "/menu" && (
            <div className={styles.btnContainerii}>
              <Button
                btnType='primaryiii'
                text='See Entire Menu'
                href='/menu'
              />
            </div>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Popular;
