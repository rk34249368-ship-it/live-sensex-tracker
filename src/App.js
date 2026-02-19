import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LiveSensexTracker = () => {
  const [sensexData, setSensexData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    // Fetch sensex data from an API (Placeholder URL)
    const response = await fetch('https://api.example.com/sensex');
    const data = await response.json();
    setSensexData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000); // Refresh data every minute
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: sensexData.map(entry => entry.time),
    datasets: [{
      label: 'Sensex',
      data: sensexData.map(entry => entry.value),
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    }]
  };

  return (
    <div>
      <h1>Live Sensex Tracker</h1>
      {loading ? <p>Loading...</p> : <Line data={chartData} />}
      <button onClick={fetchData}>Refresh Data</button>
    </div>
  );
};

export default LiveSensexTracker;