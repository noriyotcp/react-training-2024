import { useEffect, useState } from 'react';

export function Clock() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <div>
      <h1>Current Time</h1>
      <p>{date}</p>
    </div>
  )
}
