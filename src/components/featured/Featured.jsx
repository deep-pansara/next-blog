import Image from "next/image";
import styles from "./Featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Your Guide to </b>
        Trendy Life & Tech
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
            tempore perspiciatis!
          </h1>
          <p className={styles.postDescription}>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            adipisci, porro maxime voluptatibus suscipit ea sunt placeat
            voluptas minus veritatis quaerat dignissimos totam minima
            accusantium et quas incidunt sequi facere!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
export default Featured;
