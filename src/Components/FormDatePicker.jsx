import React from "react";
import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
function CustomInput({ value, onClick }) {
  return (
    <div className="bg-[#2B2B40] w-full flex rounded-[7px] p-1">
      <input
        type="text"
        className="form-control"
        value={value}
        onClick={onClick}
        readOnly
      />
      <div onClick={onClick} className="flex items-center">
        <CiCalendar color="#FFF" className="" fontSize={25} />
      </div>
    </div>
  );
}
// <div className="input-group form-date-picker-group">
//
//   <div className="input-group-append">
//     {/* !border-none */}
// <span onClick={onClick} className="input-group-text  pointer">
//   <CiCalendar color="#FFF" className=" " />
// </span>
//   </div>
// </div>
const FormDatePicker = ({ date, setDate, placeholderText, onChange }) => {
  return (
      <DatePicker
      selected={date}
      placeholderText={placeholderText}
      onChange={!onChange ? (date) => setDate(date) : onChange}
      dateFormat="dd-MM-yyyy"
      className="w-full"
      todayButton={"TODAY"}
      customInput={<CustomInput />}
    />
  );
};

export default FormDatePicker;
