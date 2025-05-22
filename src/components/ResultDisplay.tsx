import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import type { OperationType } from './OperationSelector';
import FormatSelector, { FormatType } from './FormatSelector';

interface ResultDisplayProps {
  result: string[];
  format: FormatType;
  onFormatChange: (format: FormatType) => void;
  isEmpty: boolean;
  operation: OperationType;
  itemCount: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ 
  result, 
  format, 
  onFormatChange,
  isEmpty, 
  operation, 
  itemCount 
}) => {
  const [copied, setCopied] = useState(false);

  const formatResult = (items: string[], format: string): string => {
    switch (format) {
      case 'comma':
        return items.join(', ');
      case 'newline':
        return items.join('\n');
      case 'space':
        return items.join(' ');
      case 'tab':
        return items.join('\t');
      default:
        return items.join(', ');
    }
  };

  const formattedResult = formatResult(result, format);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-medium text-gray-700">
          Result ({operation.charAt(0).toUpperCase() + operation.slice(1)}) - {itemCount} items
        </h2>
        <div className="flex items-center space-x-4">
          <FormatSelector
            label=""
            value={format}
            onChange={onFormatChange}
          />
          {!isEmpty && (
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-150"
              data-testid="copy-button"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
      <div
        className={`w-full min-h-32 p-4 bg-gray-50 rounded-lg border ${
          isEmpty ? 'border-gray-200' : 'border-blue-200 bg-blue-50'
        }`}
      >
        {isEmpty ? (
          <p className="text-gray-500 italic">{operation.charAt(0).toUpperCase() + operation.slice(1)} result will appear here</p>
        ) : (
          <pre className="whitespace-pre-wrap break-words font-mono text-sm">
            {formattedResult}
          </pre>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;