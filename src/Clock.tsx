import { useEffect, useState } from 'react';

export function Clock() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000, signal);

    return () => controller.abort();
  });

  return (
    <div>
      <h1>Current Time</h1>
      <p>{date}</p>
    </div>
  )
}
