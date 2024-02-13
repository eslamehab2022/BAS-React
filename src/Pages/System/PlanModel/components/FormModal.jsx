import { FormTitle } from "./FormTitle";

export const FormModal = ({ children,className, title,...props }) => {
    return (
      <fieldset className={`w-full p-3 border !border-[#d5992133] ${className}`} {...props}>
        {title ? <FormTitle title={title} /> : null}
  
        {children}
      </fieldset>
    );
  };