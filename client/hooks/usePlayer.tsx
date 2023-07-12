import { playerContext } from '@/context/playerContext';
import { useContext } from 'react';

export const usePlayer = () => useContext(playerContext)