import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ListInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const ListInput: React.FC<ListInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter items separated by commas or new lines...',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    onChange('');
  };

  return (
    <div
      className={`relative border rounded-lg transition-all duration-200 ${
        isFocused
          ? 'border-blue-500 shadow-sm shadow-blue-100'
          : 'border-gray-300'
      }`}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full h-32 p-3 rounded-lg resize-none focus:outline-none"
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors duration-150"
          aria-label="Clear input"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default ListInput