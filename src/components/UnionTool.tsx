import React, { useState, useCallback } from 'react';
import { Option as Union } from 'lucide-react';
import ListInput from './ListInput';
import FormatSelector, { FormatType } from './FormatSelector';
import ResultDisplay from './ResultDisplay';
import { parseList, findUnion } from '../utils/listOperations';

const UnionTool: React.FC = () => {
  const [list1, setList1] = useState('');
  const [list2, setList2] = useState('');
  const [inputFormat, setInputFormat] = useState<FormatType>('comma');
  const [outputFormat, setOutputFormat] = useState<FormatType>('comma');

  const processedList1 = parseList(list1, inputFormat);
  const processedList2 = parseList(list2, inputFormat);
  const unionResult = findUnion(processedList1, processedList2);

  const isEmpty = list1.trim() === '' && list2.trim() === '';

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-3 mb-8">
        <Union className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">List Union Tool</h1>
      </div>

      <div className="grid gap-6">
        <ListInput
          label="List 1"
          value={list1}
          onChange={setList1}
          placeholder="Enter items for the first list..."
        />

        <ListInput
          label="List 2"
          value={list2}
          onChange={setList2}
          placeholder="Enter items for the second list..."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormatSelector
            label="Input Format"
            value={inputFormat}
            onChange={setInputFormat}
          />

          <FormatSelector
            label="Output Format"
            value={outputFormat}
            onChange={setOutputFormat}
          />
        </div>

        <ResultDisplay
          result={unionResult}
          format={outputFormat}
          isEmpty={isEmpty}
        />
      </div>
    </div>
  );
};

export default UnionTool;