import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jhonatanoliveira1.png" alt="Jhonatan de Oliveira"/>
      <div>
        <strong>Jhonatan de Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}