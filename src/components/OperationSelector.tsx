import React from 'react';
import { Option as Union, Users as Intersect } from 'lucide-react';

export type OperationType = 'union' | 'intersection';

interface OperationSelectorProps {
  value: OperationType;
  onChange: (value: OperationType) => void;
}

const OperationSelector: React.FC<OperationSelectorProps> = ({ value, onChange }) => {
  const operations = [
    { value: 'union', label: 'Union', icon: Union },
    { value: 'intersection', label: 'Intersection', icon: Intersect },
  ];

  return (
    <div className="flex space-x-3">
      {operations.map((operation) => {
        const Icon = operation.icon;
        return (
          <button
            key={operation.value}
            onClick={() => onChange(operation.value as OperationType)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              value === operation.value
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            data-testid={`operation-${operation.value}`}
          >
            <Icon size={20} />
            <span>{operation.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default OperationSelector;