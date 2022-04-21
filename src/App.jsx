import { useEffect, useState } from 'react';
import defaultWorkout from './workout.default.json';
import Header from './components/Header';
import Timer from './components/Timer';
import Exercise from './components/Exercise';
import RecordModal from './components/RecordModal';

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [workout, setWorkout] = useState({});

  useEffect(() => {
    loadFromStore();
  }, []);

  const updateExercise = (exercise) => {
    const updatedWorkout = { ...workout };
    Object.keys(updatedWorkout).forEach((day) => {
      updatedWorkout[day].exercises.forEach((oldExercise) => {
        if (oldExercise.name === exercise.name) {
          oldExercise.weight = exercise.weight;
        }
      });
    });
    setWorkout(updatedWorkout);
    saveToStore();
  };

  const saveToStore = () => {
    localStorage.setItem('strength3-workout', JSON.stringify(workout));
  };

  const loadFromStore = () => {
    const workoutJson = localStorage.getItem('strength3-workout');
    const workoutSave = JSON.parse(workoutJson);
    console.log(workoutSave);
    if (workoutSave) {
      setWorkout(workoutSave);
      return;
    }
    setWorkout(defaultWorkout);
  };

  return (
    <div>
      <Header />

      <Timer />

      <main className="px-8 py-4">
        {Object.entries(workout).map(([key, value]) => (
          <div className="mb-4 last:mb-0" key={key}>
            <h2 className="mb-2 text-2xl">{value.label}</h2>
            {value.exercises?.map((exercise) => (
              <Exercise
                {...exercise}
                onClick={() => setSelectedExercise(exercise)}
                className="mb-2 last:mb-0"
                key={exercise.name}
              />
            ))}
          </div>
        ))}
      </main>

      {selectedExercise && (
        <RecordModal exercise={selectedExercise} onClose={() => setSelectedExercise(null)} onSave={updateExercise} />
      )}
    </div>
  );
}
