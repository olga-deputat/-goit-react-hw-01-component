import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.secondarylighter};
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  font-size: 25px;
  font-weight: 400;
  text-align: center;
`;

export const TableTread = styled.thead`
  background-color: ${({ theme }) => theme.colors.infolight};
`;

export const TableBody = styled.tbody`
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
`;

export const TableRow = styled.tr`
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
`;

export const TableHeader = styled.th`
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
`;

export const TableD = styled.td`
  border: ${({ theme }) => theme.spacing(0.2)};
  border-color: ${({ theme }) => theme.colors.secondarydark};
  border-style: solid;
`;
