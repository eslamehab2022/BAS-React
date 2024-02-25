import { useState } from "react";
import { Document, Page } from "react-pdf";
import Pdf from "./Pdf";
import { Form } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Select } from "@mui/material";

function Test() {
  const [openPdf, setOpenPdf] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm;
  return (
    <div>
      <Form.Group>
        <Form.Label>مكون البناء</Form.Label>
        <Controller
          name="buildingComponent"
          className="w-100"
          control={control}
          render={({ field, onChange, value, name, ref }) => (
            <Select
              inputRef={ref}
              className="w-100"
              // options={buildingComponent}
              onChange={onChange}
              {...field}
              name={name}
            />
          )}
        />
      </Form.Group>
    </div>
  );
}

export default Test;
