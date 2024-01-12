import { FriendListItem } from 'components/FriendList/FriendListItem';
import { Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friend>
      {friends.map(element => (
        <FriendListItem key={element.id} {...element} />
      ))}
    </Friend>
  );
};
