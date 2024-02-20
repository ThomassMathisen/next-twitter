import styles from "./registerPage.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Repeat password"
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
