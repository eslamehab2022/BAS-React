import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormModal } from "../../../PlanModel/components/FormModal";
import { FaCheck } from "react-icons/fa";
export const DetectForm = ({ setIsExist }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data = { ...manipulateDataFormat(data) };
    setIsExist(data.isExist);
  };
  const manipulateDataFormat = (data) => {
    data.isExist = Boolean(parseInt(data.isExist));
    return data;
  };
  const selectedOption = watch("isExist");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormModal title={"بحث عن المشروع"}>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2">
            <label
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: selectedOption === "1" ? "#EFAA20" : "#414162",
              }}
              className="bg-[#414162] rounded w-5 h-5 flex items-center justify-center"
            >
              {selectedOption === "1" && <FaCheck color="white" />}
              <input
                className="appearance-none"
                type="radio"
                id="exist-project"
                value={1}
                {...register("isExist")}
              />
            </label>
            <label htmlFor="exist-project">مشروع متاح</label>
          </div>

          <div className="flex items-center gap-2">
            <label
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: selectedOption === "0" ? "#EFAA20" : "#414162",
              }}
              className="bg-[#414162] rounded w-5 h-5 flex items-center justify-center"
            >
              {selectedOption === "0" && <FaCheck color="white" />}
              <input
                className="appearance-none"
                type="radio"
                id="new-project"
                value={0}
                {...register("isExist", {
                  required: "يجب اختيار حالة المشروع",
                })}
              />
            </label>
            <label htmlFor="new-project">مشروع جديد</label>
          </div>
        </div>
      </FormModal>
      {errors && errors.isExist && (
        <p className="text-red-500 text-center py-1">
          {errors.isExist.message}
        </p>
      )}

      <div className={`flex justify-end py-3 `}>
        <SubmitButton disabled={!selectedOption ? true : false} />
      </div>
      <DevTool control={control} />
    </form>
  );
};

const SubmitButton = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#aaaaaa" : "#EFAA20",
      }}
      className={`w-[140px] h-[30px] rounded-md border !border-[#EFAA20] text-[#1E1E2D] text-[15px] font-medium`}
    >
      التالى
    </button>
  );
};


