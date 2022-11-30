import UserCoinCounter from '../components/UserCoinCounter';
import UserCollectForm from '../components/UserCollectForm';
import { useState } from 'react';

export default function ActivityPage({
  pageType,
  step,
}: {
  pageType: string;
  step: string;
}) {
  const pageContainerStyle = {
    height: '100vh',
    backgroundColor: 'yellow',
  };

  const activityContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  };

  const [points, setPoints] = useState(0);

  return (
    <div style={pageContainerStyle as React.CSSProperties}>
      {pageType === 'reciclagem' ? (
        <div style={activityContainerStyle as React.CSSProperties}>
          <UserCollectForm step={step} points={points} setPoints={setPoints} />
        </div>
      ) : null}
      <UserCoinCounter points={points} />
    </div>
  );
}
