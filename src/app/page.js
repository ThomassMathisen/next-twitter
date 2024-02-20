"use client";

import styles from "./Page.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <FaXTwitter />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.header}>Happening Now</h1>
        <h2 className={styles.subheader}>Join today.</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.googleButton}>
            <FcGoogle /> Sign up with Google
          </button>
          <button className={styles.appleButton}>
            <FaApple /> Sign up with Apple
          </button>
        </div>
        <p className={styles.or}>or</p>
        <Link href="/register">
          <button className={styles.createButton}>Create Account</button>
        </Link>
        <p className={styles.terms}>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <span className={styles.signinTitle}>Already have an account?</span>
        <Link href="/login">
          <button className={styles.signinButton}>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
