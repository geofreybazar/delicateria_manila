"use client";

import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { MdOutlineClose } from "react-icons/md";

import OrdersList from "./OrdersList";
import { Orders } from "@/lib/types/auth";
import ViewOrderModal from "./ViewOrderModal";
import { viewOrderModalStyle } from "@/lib/variables/order";

const OrdersTable = ({ orders }: { orders: Orders[] }) => {
  const [openViewDetails, setOpenViewDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | string>(null);
  const handleCloseViewDetails = () => setOpenViewDetails(false);
  const handleOpenViewDetails = (id: string) => {
    setSelectedOrder(id);
    setOpenViewDetails(true);
  };

  return (
    <>
      <div className='divide-y divide-gray-200'>
        <OrdersList
          orders={orders}
          handleOpenViewDetails={handleOpenViewDetails}
        />
      </div>

      <Modal
        open={openViewDetails}
        onClose={handleCloseViewDetails}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={viewOrderModalStyle}>
          <div className='h-full overflow-auto'>
            <div className='w-full flex justify-end'>
              <button
                onClick={handleCloseViewDetails}
                className='cursor-pointer ml-auto bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700'
              >
                <MdOutlineClose size={20} />
              </button>
            </div>
            <ViewOrderModal selectedOrder={selectedOrder} />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default OrdersTable;
