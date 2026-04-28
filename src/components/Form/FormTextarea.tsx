import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onValidate?: (value: string) => string | null;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  label,
  value,
  onChange,
  onValidate,
  required = false,
  placeholder,
  rows = 4,
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
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className={`
            w-full rounded-lg border transition-all duration-200
            ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
            ${error ? 'border-red-500 focus:ring-red-200' : 
              isValid ? 'border-green-500 focus:ring-green-200' : 
              'border-gray-300 focus:ring-[#104484]/20'}
            focus:outline-none focus:ring-4
            py-2 px-4 resize-none
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
          <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
        )}
        {isValid && !error && (
          <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
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

export default FormTextarea;