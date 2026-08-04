import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled,
  required,
  icon: Icon,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
        {label} {required && <span className="text-emerald-600">*</span>}
      </label>

      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-slate-400 pointer-events-none transition-colors">
            <Icon size={18} />
          </div>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full text-sm py-3 transition-all duration-200 border rounded-xl bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none ${
            Icon ? "pl-11" : "pl-4"
          } ${isPassword ? "pr-11" : "pr-4"} ${
            error
              ? "border-rose-500 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 text-rose-900"
              : "border-slate-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
          } ${disabled ? "opacity-60 cursor-not-allowed bg-slate-100" : ""}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={disabled}
            className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <p className="text-xs font-medium text-rose-500 mt-1">{error}</p>}
    </div>
  );
}

export default InputField;