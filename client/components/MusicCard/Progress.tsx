import { ReactNode, useEffect, useRef, useState } from 'react';

import { usePlayer } from '@/hooks/usePlayer';
import { MusicsProps } from '@/types';

import styles from './styles.module.scss';

interface ProgressProps {
  music: MusicsProps
  children: ReactNode;
}

const Progress = ({ music, children }: ProgressProps) => {
  const progressDivRef = useRef<HTMLDivElement>(null);
  const {currentMusic} = usePlayer()
  useEffect(() => {
    if(currentMusic?.src !== music.music_url ) {
      return
    }
    const eventTimeUpdate = () => {
      if (!currentMusic) {
        return;
      }
      const progress = (currentMusic.currentTime / currentMusic.duration) * 100;
      const roundProgress = String(Math.round(progress));

      progressDivRef.current?.style.setProperty(
        '--height-progress',
        `${roundProgress}%`
      );
    };
    currentMusic?.addEventListener('timeupdate', eventTimeUpdate);

    return () => {
      currentMusic?.removeEventListener('timeupdate', eventTimeUpdate);
    };
  }, [currentMusic, music]);

  return (
    <div ref={progressDivRef} className={styles.progressBar}>
      {children}
    </div>
  );
};

export default Progress;
