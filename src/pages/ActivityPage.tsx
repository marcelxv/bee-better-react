import React, { useState } from 'react';
import UserCollectForm from '../components/UserCollectForm';
import Navbar from '../components/NavBar';
import { Box, Button } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import { createCollect } from '../services/auth';
import { nanoid } from 'nanoid';

export default function ActivityPage({
  pageType,
  step,
  points,
  user,
  setUser,
}: {
  pageType: string;
  step: string;
  points?: number;
  user?: any;
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
      user_id: user.id,
      collect_type: 'reciclagem',
      collect_type_id: 1,
      collect_id: nanoid(10),
      weight: points ? points * 0.1 : 0,
      collect_score: points,
      collect_station: 'ecoloja pinheiros',
      collect_station_id: Math.floor(Math.random() * 100),
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
