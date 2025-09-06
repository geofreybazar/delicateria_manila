"use client";

import { ClientUser } from "@/lib/types/auth";
import { useMemo } from "react";
import {
  MdOutlinePersonOutline,
  MdMailOutline,
  MdOutlinePhone,
} from "react-icons/md";

const AccountInformation = ({ user }: { user: ClientUser }) => {
  const dateOfMembership = new Date(user.createdAt);

  const activeOrders = useMemo(
    () =>
      user.orders.filter(
        (order) =>
          order.orderStatus !== "picked up" && order.orderStatus !== "delivered"
      ),
    [user]
  );

  return (
    <div className='md:w-1/2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
      <div className='px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Account Information
        </h2>
      </div>
      <div className='p-6 space-y-6'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
            <MdOutlinePersonOutline className='w-5 h-5 text-gray-600' />
          </div>
          <div>
            <p className='text-sm text-gray-500'>Full Name</p>
            <p className='font-medium text-gray-900'>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
            <MdMailOutline className='w-5 h-5 text-gray-600' />
          </div>
          <div>
            <p className='text-sm text-gray-500'>Email Address</p>
            <p className='font-medium text-gray-900'>{user.email}</p>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center'>
            <MdOutlinePhone className='w-5 h-5 text-gray-600' />
          </div>
          <div>
            <p className='text-sm text-gray-500'>Contact Number</p>
            <p className='font-medium text-gray-900'>{user.phoneNumber}</p>
          </div>
        </div>

        <div className='pt-4 border-t border-gray-200'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-gray-500'>Member since</span>
            <span className='text-gray-900 font-medium'>
              {dateOfMembership.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className='flex items-center justify-between text-sm mt-2'>
            <span className='text-gray-500'>Total Orders</span>
            <span className='text-gray-900 font-medium'>
              {activeOrders.length} orders
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
