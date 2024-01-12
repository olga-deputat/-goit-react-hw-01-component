import {
  Card,
  PhotoCard,
  TextCard,
  ContainerStats,
  Stats,
  StatsCentre,
  Statslabel,
  Statsquantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <Card>
      <PhotoCard src={user.avatar} alt={user.username} />
      <h2>{user.username}</h2>
      <TextCard>@{user.tag}</TextCard>
      <TextCard>{user.location}</TextCard>

      <ContainerStats>
        <Stats>
          <Statslabel>Followers</Statslabel>
          <Statsquantity>{user.stats.followers}</Statsquantity>
        </Stats>
        <StatsCentre>
          <Statslabel>Views:</Statslabel>
          <Statsquantity>{user.stats.views}</Statsquantity>
        </StatsCentre>
        <Stats>
          <Statslabel>Likes</Statslabel>
          <Statsquantity>{user.stats.likes}</Statsquantity>
        </Stats>
      </ContainerStats>
    </Card>
  );
};
