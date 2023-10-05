import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClassName = isOnline ? styles.online : styles.offline;
    return <li className={styles['friend-list-item']}>
      <span className={`${styles.status} ${statusClassName}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>

}

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};