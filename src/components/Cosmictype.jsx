import React, { useEffect, useState } from 'react';

const CosmicType = ({ text, speed = 50 }) => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!text || typeof text !== 'string') return;

    let i = 0;
    const interval = setInterval(() => {
      setTyped((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 style={{
      fontFamily: 'monospace',
      color: '#00ffff',
      textShadow: '0 0 6px #0ff',
      whiteSpace: 'pre',
    }}>
      {typed}
    </h2>
  );
};

export default CosmicType;
