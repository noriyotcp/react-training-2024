import { useEffect, useState } from 'react';

export function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
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
