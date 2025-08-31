import { Orders } from "@/lib/types/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const OrdersTable = ({ orders }: { orders: Orders[] }) => {
  return (
    <TableContainer component={Paper} className='shadow-md rounded-lg'>
      <Table>
        <TableHead className='bg-gray-100'>
          <TableRow>
            <TableCell className='font-bold text-gray-700'>
              Reference Number
            </TableCell>
            <TableCell className='font-bold text-gray-700'>Status</TableCell>
            <TableCell className='font-bold text-gray-700'>
              Total Paid
            </TableCell>
            <TableCell className='font-bold text-gray-700'>Items</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              className='hover:bg-gray-50 transition-colors duration-200'
            >
              <TableCell
                className='text-gray-600'
                sx={{
                  width: "14%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {order.referenceNumber}
              </TableCell>
              <TableCell className='text-gray-600'>
                {order.orderStatus}
              </TableCell>
              <TableCell className='text-gray-600'>
                ₱
                {new Intl.NumberFormat("en-PH", {
                  minimumFractionDigits: 2,
                }).format(order.totalClientPaid)}
              </TableCell>
              <TableCell className='text-gray-600'>
                {order.itemsOrdered.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
