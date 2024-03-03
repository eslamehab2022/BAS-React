import { Controller, useForm } from "react-hook-form";
import { FormModal } from "../../../PlanModel/components/FormModal";
import { CustomRadioButton } from "./CustomRadioButton";
export const DetectForm = ({ setIsExist }) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      // console.log(data.isExist);
      setIsExist(data.isExist === "مشروع جديد" ? false : true);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormModal title={"بحث عن المشروع"}>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <Controller
                name="isExist"
                control={control}
                defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <CustomRadioButton
                    name="isExist"
                    value={"مشروع متاح"}
                    checked={value === "مشروع متاح"}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
              />
            </div>
            <div className="flex items-center gap-2">
              <Controller
                name="isExist"
                control={control}
                defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <CustomRadioButton
                    name="isExist"
                    value="مشروع جديد"
                    checked={value === "مشروع جديد"}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
              />
            </div>
          </div>
        </FormModal>
        <div className={`flex justify-end py-3 `}>
          <button
            type="submit"
            className={`
                
                w-[140px] h-[30px] rounded-md  bg-[#EFAA20] text-[#1E1E2D] text-[15px] font-medium`}
          >
            التالى
          </button>
        </div>
      </form>
    );
  };