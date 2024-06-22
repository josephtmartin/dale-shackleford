import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleSheetsTable = () => {
  const [data, setData] = useState([]);
  const spreadsheetId = '1rT9XLv_WCKyJzNcKAMpYOZVmGrch8JGabdFjYpR-Juk';
  const apiKey = 'AIzaSyDC8vW9HI01H04B3nvavLfsdOSGZk90_2A';
  const range = 'Sheet1!A1:E1000'; // Adjust the range according to your needs

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
      try {
        const response = await axios.get(url);
        setData(response.data.values);
      } catch (error) {
        console.error('Error fetching data from Google Sheets', error);
      }
    };

    fetchData();
  }, [spreadsheetId, apiKey, range]);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {data.length > 0 && data[0].map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetsTable;
