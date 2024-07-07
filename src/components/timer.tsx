// components/CountdownTimer.tsx
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
    onClick: () => void;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onClick }) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const isTimeUp = Object.values(timeLeft).every(value => value === 0);

    return (
        <div className='py-6 lg:py-14'>
            {isTimeUp ? (
                <span></span>
            ) : (
                <div className="text-black text-center">
                    <p className='text-2xl py-4'>Welcome to Godavari Tours & Travels</p>
                    <p>Our website will be launched by</p>
                    <h1 className='text-6xl py-2'>Sri Kandula Durgesh</h1>
                    <h3 className='text-xl'>Hon'ble Minister of Tourism, Culture, and Cinematography</h3>
                </div>
            )}
            <div className="flex justify-center items-center space-x-8">
                {isTimeUp ? (
                    <button onClick={onClick} className="bg-red-600 text-white tracking-widest text-4xl py-4 px-8 rounded z-[999999]">LAUNCH</button>
                ) : (
                    Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center py-12">
                            <h1 className="text-4xl lg:text-6xl text-red-600">{value}</h1>
                            <div className="text-xs text-black lg:text-xl">{unit.toUpperCase()}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CountdownTimer;
