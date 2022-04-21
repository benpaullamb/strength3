import { useState } from 'react';
import Card from './Card';
import Button from './Button';

export default function RecordModal({ exercise, onClose, onSave }) {
  const [weight, setWeight] = useState(exercise.weight);

  const close = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.(e);
    }
  };

  const save = () => {
    const updatedExercise = { ...exercise };
    updatedExercise.weight = Number(weight);
    onSave?.(updatedExercise);
    onClose?.();
  };

  return (
    <div
      onClick={close}
      className="w-full h-full p-8 fixed top-0 left-0 z-10 flex justify-center items-center bg-sky-900/70">
      <Card className="w-full">
        <h2 className="text-xl">Add {exercise.name} Record</h2>
        <span className="mt-2 block text-lg">Current: {exercise.weight}kg</span>
        <input
          value={weight}
          onChange={(e) => setWeight(e.currentTarget.value)}
          type="number"
          min={0}
          className="w-full px-6 py-2 mt-4 bg-white rounded-3xl drop-shadow text-right text-7xl"
        />
        <div className="mt-4 flex justify-end">
          <Button onClick={save}>Save</Button>
        </div>
      </Card>
    </div>
  );
}
