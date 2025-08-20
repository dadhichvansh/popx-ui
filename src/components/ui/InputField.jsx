function InputField({
  id,
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  inputClassName = "",
  legendClassName = "",
}) {
  return (
    <fieldset className="mb-4 rounded-md border border-[#CBCBCB] bg-white px-2.5 pb-2">
      <legend className={"text-[#6C25FF] text-sm px-1 " + legendClassName}>
        {label}
        {required && <span className="text-[#DD4A3D]"> *</span>}
      </legend>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "pl-1.5 text-sm text-[#1D2226] focus:outline-none h-full w-full " +
          inputClassName
        }
        required={required}
        autoComplete="off"
      />
    </fieldset>
  );
}

export default InputField;
