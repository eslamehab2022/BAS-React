export const InputLabel = ({ label, id,size,mandatory }) => {
    return (
      <label 
      style={{
        fontSize: size? `${size}px` : '12px',
      }}
      htmlFor={id} className="text-white text-xs font-medium mb-2">
        {label} {mandatory && <span className="text-danger">*</span>}
      </label>
    );
  };