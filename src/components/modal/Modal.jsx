import styles from "./modal.module.css";

const Modal = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Modal;
