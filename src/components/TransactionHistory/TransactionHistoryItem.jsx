import { TableBody, TableD, TableRow } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableBody>
      <TableRow>
        <TableD>{type}</TableD>
        <TableD>{amount}</TableD>
        <TableD>{currency}</TableD>
      </TableRow>
    </TableBody>
  );
};
