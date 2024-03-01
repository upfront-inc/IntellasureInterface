import React, { useState, useEffect } from 'react';

const LoadingComponent = () => {
  const [loadingMessage, setLoadingMessage] = useState('Loading');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingMessage(prev => {
        const dotCount = (prev.match(/\./g) || []).length;
        if (dotCount < 3) {
          return prev + '.';
        } else {
          return 'Loading';
        }
      });
    }, 500); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means this effect runs once on mount

  return <div style={styles.loadingText}>{loadingMessage}</div>;
};

const styles = {
  loadingText: {
    fontSize: '22px',
    fontWeight: 'bold'
  }
}

export default LoadingComponent;