import UserCollectForm from '../components/UserCollectForm';

export default function ActivityPage({
  pageType,
  step,
  points,
  setPoints,
}: {
  pageType: string;
  step: string;
  points?: number;
  setPoints?: React.Dispatch<React.SetStateAction<number>>;
}) {

  return (
    <div>
      {pageType === 'reciclagem' ? (
        <div>
          <UserCollectForm step={step} points={points} setPoints={setPoints} />
        </div>
      ) : null}
    </div>
  );
}
