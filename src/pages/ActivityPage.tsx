import UserCoinCounter from '../components/UserCoinCounter';
import UserCollectForm from '../components/UserCollectForm';

export default function ActivityPage({ pageType, step }: { pageType: string, step: string }) {
    const reciclagemPageMount = () => {
    if (pageType === "reciclagem") {
        return (
            <div>
                <UserCollectForm step={step} />
            </div>
        );
    }
}
  return (
    <div>
        {reciclagemPageMount()}
        <UserCoinCounter />
    </div>
  );
}
