import React, { useState } from 'react';
import { ListFilter } from 'lucide-react';
import ListInput from './ListInput';
import FormatSelector, { FormatType } from './FormatSelector';
import ResultDisplay from './ResultDisplay';
import OperationSelector, { OperationType } from './OperationSelector';
import { parseList, findUnion, findIntersection } from '../utils/listOperations';

const ListTool: React.FC = () => {
  const [list1, setList1] = useState('');
  const [list2, setList2] = useState('');
  const [operation, setOperation] = useState<OperationType>('union');
  const [inputFormat1, setInputFormat1] = useState<FormatType>('newline');
  const [inputFormat2, setInputFormat2] = useState<FormatType>('newline');
  const [outputFormat, setOutputFormat] = useState<FormatType>('newline');

  const processedList1 = parseList(list1, inputFormat1);
  const processedList2 = parseList(list2, inputFormat2);
  const result = operation === 'union' 
    ? findUnion(processedList1, processedList2)
    : findIntersection(processedList1, processedList2);

  const isEmpty = list1.trim() === '' && list2.trim() === '';

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <ListFilter className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">List Operations Tool</h1>
      </div>

      <OperationSelector value={operation} onChange={setOperation} />

      <div className="grid gap-6">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-medium text-gray-700">List 1 ({processedList1.length} items)</h2>
            <FormatSelector
              label=""
              value={inputFormat1}
              onChange={setInputFormat1}
            />
          </div>
          <ListInput
            value={list1}
            onChange={setList1}
            placeholder="Enter items for the first list..."
          />
        </div>

        <div>
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-medium text-gray-700">List 2 ({processedList2.length} items)</h2>
            <FormatSelector
              label=""
              value={inputFormat2}
              onChange={setInputFormat2}
            />
          </div>
          <ListInput
            value={list2}
            onChange={setList2}
            placeholder="Enter items for the second list..."
          />
        </div>

        <ResultDisplay
          result={result}
          format={outputFormat}
          onFormatChange={setOutputFormat}
          isEmpty={isEmpty}
          operation={operation}
          itemCount={result.length}
        />
      </div>
    </div>
  );
};

export default ListTool;