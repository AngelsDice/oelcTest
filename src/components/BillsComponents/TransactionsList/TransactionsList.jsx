import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';

const TransactionsList = ({ list }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell numeric>Amount</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {list.map(item => {
        return (
          <TableRow key={item.id}>
            <TableCell component="th" scope="row">
              {new Intl.DateTimeFormat('en-GB').format(new Date(item.date))}
            </TableCell>
            <TableCell numeric>
              {new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP',
                minimumFractionDigits: 2
              }).format(item.amount)}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
export default TransactionsList;
