export const InputLabel = ({ label, id, size, mandatory,className, ...props }) => {
  return (
    <label
      style={{
        fontSize: size ? `${size}px` : "12px",
      }}
      htmlFor={id}
      className={`text-white text-xs font-medium mb-2 ${className}`}
      {...props}
    >
      {label} {mandatory && <span className="text-danger">*</span>}
    </label>
  );
};
