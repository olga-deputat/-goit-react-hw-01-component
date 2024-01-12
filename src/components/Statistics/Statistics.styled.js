import styled from 'styled-components';

export const StatisticsSection = styled.section`
  background-color: whitesmoke;
  width: 500px;
  margin: 5px auto 0 auto;
  padding: 0;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StatisticsTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

export const StatisticsLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.dark};
`;

export const Percentage = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
`;
