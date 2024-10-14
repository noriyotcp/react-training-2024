import { useEffect, useState } from 'react';

type HourCycle =
  | { label: 'h12'; value: 'h12' }
  | { label: 'h24'; value: 'h24' };

const hourCycles: HourCycle[] = [
  { label: 'h12', value: 'h12' },
  { label: 'h24', value: 'h24' },
];

export function Clock() {
  const [selected, setSelected] = useState<'h12' | 'h24'>('h12');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const formatOptions = {
    hour: '2-digit' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
    hour12: selected === 'h12',
  };

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], formatOptions)
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value;
    if (value === 'h12' || value === 'h24') {
      setSelected(value);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], formatOptions));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [formatOptions]);

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
  );
}
