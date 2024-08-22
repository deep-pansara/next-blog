"use client";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useState } from "react";

function AuthLinks() {
  const [open, setOpen] = useState(false);
  //temporary
  const status = "notAuthenticated";

  return (
    <>
      {status === "notAuthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className="link">Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Contact Us</Link>

          {status === "notAuthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write" className="link">
                Write
              </Link>
              <span className="link">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default AuthLinks;
