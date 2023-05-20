import UserCollectForm from '../components/UserCollectForm';
import Navbar from '../components/NavBar';
import { Box } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

export default function ActivityPage({
  pageType,
  step,
  points,
  setUser,
}: {
  pageType: string;
  step: string;
  points?: number;
  setUser?: any;
}) {

  return (
    <>
      <Navbar />
      {pageType === 'reciclagem' ? (
        <Box>
          <UserCollectForm step={step} points={points} setPoints={setUser} />
        </Box>
      ) : null}
      <ToastContainer />
    </>
  );
}
