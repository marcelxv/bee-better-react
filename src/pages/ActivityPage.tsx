import React, { useState } from 'react';
import UserCollectForm from '../components/UserCollectForm';
import Navbar from '../components/NavBar';
import { Box, Button } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { createCollect } from '../services/auth';

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

  const INITIAL_STATE = {
    collect_type: '',
    collect_type_id: null,
    collect_id: null,
    weight: 0,
    collect_score: 0,
    collect_station: '',
    collect_station_id: null,
  };

  const [collect, setCollect] = useState(INITIAL_STATE);

  const handleCollect = async () => {
    await createCollect({
      collect_type: 'reciclagem',
      collect_type_id: 1,
      collect_id: Math.floor(Math.random() * 1000) + 1,
      weight: 2,
      collect_score: 1 * 0.1,
      collect_station: 'ecoloja pinheiros',
      collect_station_id: 8,
    });
  }


const handlePoints = (points: number) => {
  setUser((prevState: any) => ({ ...prevState, points: points + prevState.points }));
};


return (
  <>
    <Navbar />
    {pageType === 'reciclagem' ? (
      <Box>
        <UserCollectForm step={step} points={points} setPoints={handlePoints} confirmCollect={handleCollect} />
      </Box>
    ) : null}
    <ToastContainer />
  </>
);
}
