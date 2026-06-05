import UsersExplorer from "./components/UsersExplorer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1 className={styles.heading}>Users Explorer</h1>
        <p className={styles.subheading}>
          Browse the team, mark your favorites, and open a user to read their posts.
        </p>
      </header>
      <UsersExplorer />
    </main>
  );
}
