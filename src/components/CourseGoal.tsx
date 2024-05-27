import {
  //   FC,
  //   type PropsWithChildren,
  type ReactNode,
} from 'react';

interface CourseGoalProps {
  title: string;
  goalId: number;
  onDelete: (id: number) => void;
  //description: string;
  children: ReactNode;
}

//PropsWithChildren:- it is the type for children, for extra props we have to pass them in generics
// type CourseGoalProps = PropsWithChildren<{ title: 'React + Typescript' }>;

function CourseGoal({ title, goalId, onDelete, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(goalId)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export default CourseGoal;
