"use client";

import Image from "next/image";
import styles from "./ThemeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "black" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
}
export default ThemeToggle;
