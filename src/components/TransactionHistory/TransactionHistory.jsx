import { TransactionHistoryItem } from 'components/TransactionHistory/TransactionHistoryItem';
import {
  TableHeader,
  TableRow,
  TableTread,
  TransactionTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableTread>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableTread>

      {transactions.map(element => (
        <TransactionHistoryItem key={element.id} {...element} />
      ))}
    </TransactionTable>
  );
};
