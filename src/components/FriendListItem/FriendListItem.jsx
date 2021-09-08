import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.status} style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span className={s.status}></span>
      )}
      <img className={s.avatar} src={avatar} alt="avatar" width="70" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
