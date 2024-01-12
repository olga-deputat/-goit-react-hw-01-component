import styled from 'styled-components';

export const Friend = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const FriendCard = styled.li`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondarylightest};
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: 10px 20px 10px 20px;
`;

export const IsOnline = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isonline }) => ($isonline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0 auto;
`;
