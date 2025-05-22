import React from 'react';

export type FormatType = 'comma' | 'newline' | 'space' | 'tab';

interface FormatSelectorProps {
  value: FormatType;
  onChange: (value: FormatType) => void;
  label: string;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({ value, onChange, label }) => {
  const formats = [
    { value: 'comma', label: 'Comma' },
    { value: 'newline', label: 'New Line' },
    { value: 'space', label: 'Space' },
    { value: 'tab', label: 'Tab' },
  ];

  return (
    <div className="flex items-center space-x-2">
      {label && <span className="text-sm text-gray-600">{label}</span>}
      <div className="flex space-x-1">
        {formats.map((format) => (
          <button
            key={format.value}
            onClick={() => onChange(format.value as FormatType)}
            className={`px-2 py-1 text-xs rounded transition-colors duration-150 ${
              value === format.value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            data-testid={`format-${format.value}`}
          >
            {format.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormatSelector;