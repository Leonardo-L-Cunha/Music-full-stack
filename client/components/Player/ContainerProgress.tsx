import { usePlayer } from '@/hooks/usePlayer';
import  Progress  from './Progress';

import styles from './styles.module.scss'
import { useEffect, useState } from 'react';

const secondsToMinutes = (sec: number | undefined) => {
  if (!sec) return "00:00";
  
  sec = Math.trunc(+sec);
  const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
  const seconds = String(sec % 60).padStart(2, '0');

  return `${minutes}:${seconds}`;
};

const ContainerProgress = () => {
  const { currentMusic } = usePlayer();
  const [currentTime, setCurrentTime] = useState(currentMusic?.currentTime);

  useEffect(() => {
    if(!currentMusic) {
      return;
    }

    const eventTimeUpdate = () => {
      setCurrentTime(Math.trunc(currentMusic.currentTime));
    }

    currentMusic.addEventListener("timeupdate", eventTimeUpdate);
    
    return () => {
      currentMusic.removeEventListener("timeupdate", eventTimeUpdate);
    }
  }, [currentMusic]);

  return(
    <div className={styles.containerProgress}>
      <span>{secondsToMinutes(currentTime)}</span>
      <Progress />
      <span>{secondsToMinutes(currentMusic?.duration)}</span>
    </div>
  )
}

export default ContainerProgress