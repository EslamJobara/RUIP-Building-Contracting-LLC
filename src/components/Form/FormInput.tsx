import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onValidate?: (value: string) => string | null;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onValidate,
  required = false,
  placeholder,
  disabled = false
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isTouched && onValidate) {
      const validationError = onValidate(value);
      setError(validationError);
      setIsValid(!validationError && value.length > 0);
    }
  }, [value, isTouched, onValidate]);

  const handleBlur = () => {
    setIsTouched(true);
    if (onValidate) {
      const validationError = onValidate(value);
      setError(validationError);
      setIsValid(!validationError && value.length > 0);
    }
  };

  return (
    <div className="space-y-1">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-lg border transition-all duration-200
            ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
            ${error ? 'border-red-500 focus:ring-red-200' : 
              isValid ? 'border-green-500 focus:ring-green-200' : 
              'border-gray-300 focus:ring-[#104484]/20'}
            focus:outline-none focus:ring-4
            ${error ? 'pr-10' : isValid ? 'pr-10' : 'pr-4'}
            py-2 px-4
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
        )}
        {isValid && !error && (
          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
        )}
      </div>
      {error && (
        <p 
          id={`${id}-error`} 
          className="text-sm text-red-500 animate-fadeIn"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;