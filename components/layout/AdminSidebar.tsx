"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./UserSidebar.module.css";
import Dashboard from "../../public/icons/dashboard.svg";
import Menu from "../../public/icons/menu.svg";
import Envelope from "../../public/icons/envelope.svg";
import User from "../../public/icons/user.svg";

const AdminSidebar = () => {
  const pathname = usePathname();

  const menuItem = [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: <Dashboard className={styles.icon} />,
    },
    {
      name: "Menu Items",
      url: "/admin/rooms",
      icon: <Menu className={styles.icon} />,
    },
    {
      name: "Reservations",
      url: "/admin/bookings",
      icon: <Envelope className={styles.icon} />,
    },
    {
      name: "Users",
      url: "/admin/users",
      icon: <User className={styles.icon} />,
    },
    // {
    //   name: "Reviews",
    //   url: "/admin/reviews",
    //   icon: "fas fa-star",
    // },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(pathname);

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className={styles.container}>
      {menuItem.map((x, index) => (
        <Link
          key={index}
          href={x.url}
          className={
            activeMenuItem.includes(x.url) ? styles.active : styles.btn
          }
          onClick={() => handleMenuItemClick(x.url)}
          aria-current={activeMenuItem.includes(x.url) ? "true" : "false"}
        >
          {x.icon}
          {x.name}
        </Link>
      ))}
    </div>
  );
};
export default AdminSidebar;
