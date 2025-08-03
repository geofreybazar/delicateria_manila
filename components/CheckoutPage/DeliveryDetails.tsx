import { Controller, useFormContext } from "react-hook-form";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useCityStore } from "@/lib/store/selectedCityStore";
import { DeliveryDetailsType } from "@/lib/validation/checkoutFormValidation";
import { cityShippingFees } from "@/lib/variables/metroManilaProvinces";

const cities = Object.keys(cityShippingFees);

const DeliveryDetails = () => {
  const setSelectedCity = useCityStore((state) => state.setSelectedCity);
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<DeliveryDetailsType>();

  return (
    <div className='flex flex-col gap-2'>
      <div>
        <p>Contact:</p>
        <TextField
          size='small'
          label='Email Address'
          fullWidth
          {...register("emailAddress")}
          error={!!errors.emailAddress}
          helperText={errors.emailAddress?.message}
        />
      </div>

      <div>
        <p>Shipping Address:</p>
        <div className='flex flex-col py-2 gap-2'>
          <div className='flex gap-2'>
            <TextField
              size='small'
              label='First Name'
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              size='small'
              label='Last Name'
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </div>

          <TextField
            size='small'
            label='Address'
            fullWidth
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
          />

          <div className='flex gap-2'>
            <TextField
              size='small'
              label='Postal Code'
              fullWidth
              {...register("postalCode")}
              error={!!errors.postalCode}
              helperText={errors.postalCode?.message}
            />
            {/* <TextField
              size='small'
              label='City'
              fullWidth
              {...register("city")}
              error={!!errors.city}
              helperText={errors.city?.message}
            /> */}
          </div>

          <FormControl fullWidth error={!!errors.city}>
            <InputLabel>City</InputLabel>
            <Controller
              control={control}
              name='city'
              render={({ field }) => (
                <Select
                  {...field}
                  label='City'
                  size='small'
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    field.onChange(selectedValue);
                    setSelectedCity({
                      city: selectedValue,
                    });
                  }}
                >
                  <MenuItem value=''>
                    <em>Select a city</em>
                  </MenuItem>
                  {cities.map((city, index) => (
                    <MenuItem key={index} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.city && <p color='error'>{errors.city.message}</p>}
          </FormControl>

          <TextField
            size='small'
            label='Phone Number'
            fullWidth
            {...register("phoneNumber")}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </div>
      </div>
      <Button variant='contained' color='customorange' type='submit'>
        Continue to Payment
      </Button>
    </div>
  );
};

export default DeliveryDetails;
