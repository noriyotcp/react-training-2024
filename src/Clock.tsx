import { useEffect, useState } from 'react';

const hourCycles = [
  { label: 'h12', value: 'h12' },
  { label: 'h24', value: 'h24' },
];

export function Clock() {
  const [selected, setSelected] = useState('h12');
  const isHour12 = () => selected === 'h12';
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: isHour12() }));

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelected(event.currentTarget.value);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: isHour12(),
        })
      );
    }, 1000, signal);

    return () => controller.abort();
  });

  return (
    <div>
      <h1>Current Time</h1>
      <p>{time}</p>
      {hourCycles.map((cycle) => (
        <label key={cycle.label}>
          <input
            type="radio"
            value={cycle.value}
            checked={selected === cycle.value}
            onChange={handleChange}
          />
          {cycle.label}
        </label>
      ))}
    </div>
  )
}
