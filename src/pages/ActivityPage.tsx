import UserCollectForm from '../components/UserCollectForm';
import Navbar from '../components/NavBar';
import { Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

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
    <>
      <Navbar />
      {pageType === 'reciclagem' ? (
        <Box>
          <UserCollectForm step={step} points={points} setPoints={setPoints} />
        </Box>
      ) : null}
      <ToastContainer />
    </>
  );
}
