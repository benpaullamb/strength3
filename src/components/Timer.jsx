import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';
import Button from './Button';

export default function Timer() {
  const [time, setTime] = useState(0);

  const pad = (count) => (count < 10 ? `0${count}` : count);

  const format = (timeInSecs) => {
    const mins = Math.floor(timeInSecs / 60);
    const secs = timeInSecs % 60;
    return `${pad(mins)}:${pad(secs)}`;
  };

  const addTime = () => {
    setTime(Math.min(time + 60, 600));
  };
  const subtractTime = () => {
    setTime(Math.max(time - 60, 0));
  };

  const startStop = () => {};

  const reset = () => {};

  return (
    <div className="px-8 py-4 bg-sky-100 border-b border-sky-900 drop-shadow">
      <div className="flex justify-center items-center">
        <PlusIcon onClick={addTime} className="w-8 h-8 text-sky-900" />
        <span className="mx-4 text-3xl">{format(time)}</span>
        <MinusIcon onClick={subtractTime} className="w-8 h-8 text-sky-900" />
      </div>
      <div className="mt-4 flex justify-center">
        <Button onClick={startStop} className="mr-4">
          Start
        </Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}
