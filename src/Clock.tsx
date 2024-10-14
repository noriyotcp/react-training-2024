import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000, signal);

    return () => controller.abort();
  });

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
    </div>
  )
}
