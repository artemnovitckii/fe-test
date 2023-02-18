import React, { ChangeEvent } from "react";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  id,
  placeholder,
  required,
  ...props
}) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${props.className}`}
      required={required}
    />
  );
};

export default TextInput;
