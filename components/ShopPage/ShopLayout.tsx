"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Filter from "./Filter/Filter";
import { ReturnedCollections } from "@/lib/types/colletions";
import { IoFilterOutline } from "react-icons/io5";

interface ShopLayoutProps {
  collections: ReturnedCollections[];
  children: React.ReactNode;
}

const ShopLayout: React.FC<ShopLayoutProps> = ({ collections, children }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className='flex flex-col md:flex-row gap-4 w-full'>
      {/* Sidebar (desktop) */}
      <div className='hidden md:block w-1/4 lg:w-1/6'>
        <Filter collections={collections} />
      </div>

      {/* Filter button (mobile) */}
      <div className='md:hidden flex justify-end '>
        <button
          onClick={() => setFilterOpen(true)}
          className=' flex items-center gap-2 rounded-md px-3 py-2 bg-gray-100 text-sm shadow-md'
        >
          Filter
          <IoFilterOutline />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor='left'
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className='w-64 p-4'>
          <Filter collections={collections} />
        </div>
      </Drawer>

      {/* Products */}
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default ShopLayout;
