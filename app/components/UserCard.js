import styles from "./UserCard.module.css";

export default function UserCard({ user, isSelected, onSelect, onToggleFavorite }) {
  return (
    <article
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(user.id)}
    >
      <div className={styles.header}>
        <h2 className={styles.name}>{user.name}</h2>
        <button
          type="button"
          className={styles.favorite}
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(user.id);
          }}
        >
          {user.favorite ? "Favorite" : "Add to favorites"}
        </button>
      </div>
      <p className={styles.detail}>{user.email}</p>
      <p className={styles.detail}>{user.company.name}</p>
    </article>
  );
}
