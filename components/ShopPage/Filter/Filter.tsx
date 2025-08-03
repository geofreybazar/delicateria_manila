"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ReturnedCollections } from "@/lib/types/colletions";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import CollapseComponent from "./CollapseComponent";

interface FilterProps {
  collections: ReturnedCollections[];
}

const Filter: React.FC<FilterProps> = ({ collections }) => {
  const [openCategory, setOpenCategory] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleCheckboxChange = (
    type: string,
    value: string,
    checked: boolean
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    const existing = params.getAll(type);
    if (checked) {
      if (!existing.includes(value)) {
        params.append(type, value);
      }
    } else {
      const newValues = existing.filter((v) => v !== value);
      params.delete(type);
      newValues.forEach((v) => params.append(type, v));
    }
    startTransition(() => {
      router.push(`/shop?${params.toString()}`);
    });
  };

  const collectionsWithHandler = collections.map((item) => ({
    ...item,
    handleCheckboxChange,
  }));

  return (
    <div className='pr-5 w-1/6'>
      <div className='flex flex-col'>
        <div
          className='cursor-pointer flex items-center justify-between border-b border-gray-400'
          onClick={() => setOpenCategory(!openCategory)}
        >
          <p className='font-semibold p-2'>Filter by Category</p>
          {openCategory ? <MdExpandLess /> : <MdExpandMore />}
        </div>
        <CollapseComponent state={openCategory} list={collectionsWithHandler} />
      </div>
    </div>
  );
};

export default Filter;
