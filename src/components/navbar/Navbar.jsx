import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/tiktok.png" alt="tiktok" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>BlogApp</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}
export default Navbar;
