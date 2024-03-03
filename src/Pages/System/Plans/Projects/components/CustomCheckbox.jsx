export const CustomCheckbox = ({ checked, onChange }) => {
    return (
      <div
        style={{
          borderWidth: "1px",
          BorderStyle: "solid",
          borderColor: checked ? "#EFAA20" : "#414162",
        }}
        className="bg-[#414162] rounded w-5 h-5 flex items-center justify-center cursor-pointer"
        onClick={onChange}
      >
        {checked && <FaCheck color="white" />}
      </div>
    );
  };