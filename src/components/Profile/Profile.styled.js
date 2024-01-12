import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PhotoCard = styled.img`
  border-radius: 100%;
  border: none;
  object-fit: contain;
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;
export const TextCard = styled.p`
  color: ${({ theme }) => theme.colors.secondarydark};
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const ContainerStats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.secondarylighter};
  margin-top: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  border-top: ${({ theme }) => theme.spacing(0.2)};
  border-top-color: ${({ theme }) => theme.colors.secondarydark};
  border-top-style: solid;
`;
export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 10px 20px 10px 20px;
`;
export const StatsCentre = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 10px 20px 10px 20px;
  border-right: ${({ theme }) => theme.spacing(0.2)};
  border-right-color: ${({ theme }) => theme.colors.secondarydark};
  border-right-style: solid;
  border-left: ${({ theme }) => theme.spacing(0.2)};
  border-left-color: ${({ theme }) => theme.colors.secondarydark};
  border-left-style: solid;
`;
export const Statslabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondarydark};
  display: flex;
  justify-content: space-evenly;
`;
export const Statsquantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-evenly;
`;
