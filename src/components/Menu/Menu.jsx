import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";

function Menu() {
  return <div className={styles.container}>
    <h2 className={styles.subtitle}>{"What's Hot"}</h2>
    <h1 className={styles.title}>Most Popular</h1>
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" className={styles.image} fill/>
      </div> 
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
      <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet, Reprehenderit, enim?</h3>
      <div className={styles.detail}>
        <span className={styles.username}>Joen doe</span>
        <span className={styles.date}> - 10.02.2000</span>
      </div>
      </div>
      </Link>
    </div>
  </div>;
}
export default Menu;
