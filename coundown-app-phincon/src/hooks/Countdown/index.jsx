import { useState, useEffect } from 'react'

const useCountdown = (existingTime) => {
    const [remainingTime, setRemainingTime] = useState(existingTime);

    useEffect(() => {
        if (remainingTime <= 0) {
            return;
        }

        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => {
                const newRemainingTime = prevRemainingTime - 1;
                if (newRemainingTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return newRemainingTime;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [remainingTime]);

    return getReturnValues(remainingTime);
};

const getReturnValues = (countDown) => {
    console.log(countDown)
    const days = Math.floor(countDown / (60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (60 * 60 * 24)) / (60 * 60)
    );
    const minutes = Math.floor((countDown % (60 * 60)) / (60));
    const seconds = Math.floor((countDown % (60)));
    console.log(seconds)
    return [days, hours, minutes, seconds];
};

export { useCountdown };