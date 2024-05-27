import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import goalImage from './assets/goals.jpg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  // useEffect(() => {
  //   const storedGoals = localStorage.getItem('goalsData');
  //   setGoals(storedGoals ? JSON.parse(storedGoals) : []);
  // }, []);
  // const [goals, setGoals] = useState<CourseGoal[]>([]);

  // const handleGoal = () => {
  //   setGoals((preGoals) => {
  //     const newGoal: CourseGoal = {
  //       id: Math.random(),
  //       title: 'React + Typescript',
  //       description: 'Good course content',
  //     };

  //     return [...preGoals, newGoal];
  //   });
  // };

  const handleGoal = (goal: string, summary: string) => {
    setGoals((preGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      // localStorage.setItem('goalsData', JSON.stringify([...preGoals, newGoal]));

      return [...preGoals, newGoal];
    });
  };

  const handleDelete = (id: number) => {
    setGoals((preGoal) => {
      // localStorage.setItem(
      //   'goalsData',
      //   JSON.stringify(preGoal.filter((goal) => goal.id !== id))
      // );
      return preGoal.filter((goal) => goal.id !== id);
    });
  };

  return (
    <main>
      <Header image={{ src: goalImage, alt: 'A list of goals' }}>
        <h1>Your course goals</h1>
      </Header>
      {/* <button onClick={handleGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleGoal} />
      <CourseGoalList goals={goals} onDelete={handleDelete} />
      {/* <CourseGoal
        title="React + Typescript"
        //description="Good course content"
      >
        <p>Good course content</p>
      </CourseGoal> */}
    </main>
  );
}
