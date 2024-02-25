import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  svg?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  svg,
  ...props
}: TextInputProps) => {
  return (
    <div className="mb-4">
      {label && <label className="label">{label}</label>}
      <div className="input input-bordered flex items-center gap-2">
        {svg}
        <input className="grow" {...props} />
      </div>
    </div>
  );
};

export default TextInput;
