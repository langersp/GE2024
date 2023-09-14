'use client';

// components/ExcelReader.js
import readXlsxFile from 'read-excel-file';

import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

const ExcelReader = () => {
  const { data, error } = useQuery('excelData', async () => {
    const file = await readXlsxFile('/test.xlsx');
    return file;
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Excel File Reader</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExcelReader;
