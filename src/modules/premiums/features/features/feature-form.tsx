import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FeatureType } from "../../../../types/feature";
import * as io from "socket.io-client";
import { SocketContext } from "../../../../contexts/socket.provider";
import { useContext } from "react";
import { features } from "process";
// const socket = io.connect("http://localhost:3001/")

const FeatureForm = () => {
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const socket = useContext(SocketContext);

  const onSave = (value: any) => {
    console.log(value);
    const feature = {
      ...value,
      type: FeatureType.Free,
      industries: ['retail'],
      countries: ['angola']
    }
    socket.emit('createFeature', feature )
  }

  let type = FeatureType.Free;
  let country = 'Angola';
  let industry = 'retail';
  return <div>
    <form className="premiums-form-container" onSubmit={handleSubmit(onSave)}>

      <FormControl>
        <TextField id="name" {...register("name")}
          placeholder="Feature Name"
          error={!!errors.name}
          helperText={errors.name?.message as string} variant="standard" /> <br />
      </FormControl>
      <br />

      <TextField id="description" {...register("description")}
        error={!!errors.description}
        multiline
        minRows={3}
        helperText={errors.description?.message as string}
        size="small" label="Description" variant="standard" />

      <br />
      <FormControl>
        {/* <InputLabel id="type-select-label">Type</InputLabel> */}
        <Select
          labelId="type-select-label"
          id="type-select"
          value={type}
          variant="standard"
        >
          <MenuItem value={FeatureType.Free}>Free</MenuItem>
          <MenuItem value={FeatureType.Premium}>Premium</MenuItem>

        </Select>

      </FormControl>
      <br />

      <FormControl>
        {/* <InputLabel id="industry-select-label">Industries</InputLabel> */}
        <Select
          labelId="industry-select-label"
          id="type-select"
          value={[industry]}
          variant="standard"
          multiple
        >
          <MenuItem value={'retail'}>Retail</MenuItem>
          <MenuItem value={'services'}>Services</MenuItem>
          <MenuItem value={'fast food'}>Fast Food</MenuItem>


        </Select>

      </FormControl>

      <br />

      <FormControl>
        {/* <InputLabel id="country-select-label">Countries</InputLabel> */}
        <Select
          labelId="country-select-label"
          id="type-select"
          value={[country]}
          variant="standard"
          multiple
        >
          <MenuItem value={'Angola'}>Angola</MenuItem>
          <MenuItem value={'Zambia'}>Zambia</MenuItem>

        </Select>

      </FormControl>
      <br />

      <button type="submit">Submit</button>
    </form>
  </div>
}

export default FeatureForm