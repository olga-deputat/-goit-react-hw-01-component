import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Section } from './Styled/SectionStyled';
import { Container } from './Styled/Container.styled';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Section>
        <Container>
          <Profile user={user} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Statistics title="Upload stats" data={data} />
        </Container>
      </Section>
      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory transactions={transactions} />
        </Container>
      </Section>
    </>
  );
};
