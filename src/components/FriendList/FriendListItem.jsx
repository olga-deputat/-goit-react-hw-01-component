import { FriendCard, IsOnline, Name } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendCard>
      <IsOnline $isonline={isOnline}></IsOnline>
      <img src={avatar} alt={name} width={40} height={40} />
      <Name>{name}</Name>
    </FriendCard>
  );
};
