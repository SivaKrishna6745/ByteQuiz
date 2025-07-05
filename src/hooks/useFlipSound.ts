import { useEffect, useRef } from 'react';

const useFlipSound = (isMuted: boolean) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        audioRef.current = new Audio('/sounds/flipsound.mp3');
        audioRef.current.volume = 0.4;
    }, []);

    const playFlipSound = () => {
        if (!isMuted && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return playFlipSound;
};

export default useFlipSound;
