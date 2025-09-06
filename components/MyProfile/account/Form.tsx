"use client";

import { useActionState, useEffect } from "react";
import { ClientUser } from "@/lib/types/auth";

import { UpdateClientUser } from "@/actions/clientUser";
import Swal from "sweetalert2";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { cityShippingFees } from "@/lib/variables/metroManilaProvinces";

const cities = Object.keys(cityShippingFees);

const Form = ({ clientUser }: { clientUser: ClientUser }) => {
  const [state, formAction, isPending] = useActionState(UpdateClientUser, null);

  useEffect(() => {
    if (state?.success) {
      Swal.fire({
        title: "Account Update!",
        text: state?.message,
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className='w-full flex justify-center p-4 shadow-sm border border-gray-200 rounded-md'
    >
      <div
        className={`w-full flex flex-col md:flex-row gap-5 ${
          isPending ? "opacity-50" : ""
        }`}
      >
        <input type='hidden' name='id' id='id' defaultValue={clientUser.id} />

        {/* Left column */}
        <div className='w-full md:w-1/2 flex flex-col gap-3'>
          <TextField
            name='email'
            label='Email'
            defaultValue={clientUser.email}
            size='small'
            fullWidth
            disabled={isPending}
          />
          <TextField
            name='firstName'
            label='First Name'
            defaultValue={clientUser.firstName}
            size='small'
            fullWidth
            disabled={isPending}
          />
          <TextField
            name='lastName'
            label='Last Name'
            defaultValue={clientUser.lastName}
            size='small'
            fullWidth
            disabled={isPending}
          />
        </div>

        {/* Right column */}
        <div className='w-full md:w-1/2 flex flex-col gap-3'>
          <TextField
            name='address'
            label='Address'
            defaultValue={clientUser.address}
            size='small'
            fullWidth
            disabled={isPending}
          />

          <FormControl fullWidth size='small' disabled={isPending}>
            <InputLabel>City</InputLabel>
            <Select name='city' defaultValue={clientUser.city}>
              <MenuItem value=''>
                <em>Select a city</em>
              </MenuItem>
              {cities.map((city, index) => (
                <MenuItem key={index} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            name='phoneNumber'
            label='Phone Number'
            defaultValue={clientUser.phoneNumber}
            size='small'
            fullWidth
            disabled={isPending}
          />

          <Button
            type='submit'
            variant='contained'
            color='customorange'
            disabled={isPending}
            className='w-full py-3 border text-center bg-mocha text-off-white rounded-full font-semibold hover:bg-white hover:text-mocha hover:shadow-lg hover:border transition-all duration-300 ease-in-out mt-5'
          >
            {isPending ? "Updating..." : "Update Account"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
