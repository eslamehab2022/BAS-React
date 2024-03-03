import { FaCheck } from "react-icons/fa";
export const CustomRadioButton = ({ name, value, checked, onChange }) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <div
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: checked ? "#EFAA20" : "#414162",
          }}
          className="bg-[#414162] rounded w-5 h-5 flex items-center justify-center"
        >
          {checked && <FaCheck color="white"/>}
        </div>
        <span className="text-white">{value}</span>
      </label>
    );
  };