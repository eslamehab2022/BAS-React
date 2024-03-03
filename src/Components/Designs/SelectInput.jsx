import { forwardRef } from "react";
import Select from "react-select";
const MultiSelect = forwardRef(() => {
  return (<Select
    // defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    // options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />)
});

export default MultiSelect;