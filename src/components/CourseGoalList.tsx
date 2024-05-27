import { ReactNode } from 'react';
import { CourseGoal as cGoal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

interface CourseGoalListProps {
  goals: Array<cGoal>;
  onDelete: (id: number) => void;
}

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 2) {
    return (
      <InfoBox mode="warning" serverty="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal goalId={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
