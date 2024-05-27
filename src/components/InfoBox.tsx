import { ReactNode } from 'react';

interface HintBoxProps {
  mode: 'hint';
  children: ReactNode;
}

interface WarningBoxProps {
  mode: 'warning';
  serverty?: 'low' | 'medium' | 'high';
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  //Typescript knows that if it's not in hint then it will be warning..so we can extract severty here
  const { serverty } = props;

  return (
    <aside className={`infobox infobox-warning warning--${serverty}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
