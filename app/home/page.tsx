"use client"


import React, { useState } from 'react';
import axios from 'axios';

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const handleClick = async () => {
    try {
      // Set the loading state to true when the button is clicked
      setIsLoading(true);

      // Simulate an API call with a delay of 14 seconds
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

      // After the API call is complete, set the loading state back to false and store the data
      setIsLoading(false);
      setApiData(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {/* Display the API data if available */}
      {apiData && (
        <div>
          <h2>API Data:</h2>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginButton;

























