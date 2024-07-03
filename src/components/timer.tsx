// components/CountdownTimer.tsx
import confetti from 'canvas-confetti';
import { useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


var duration = 25 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 50, spread: 360, ticks: 60, zIndex: 9999 };

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const handleConfetti = () => {

};

gsap.registerPlugin(ScrollTrigger);
const runAnimation = () => {

    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
    }, 250);

    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
        if (Date.now() > end) return;

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
        });

        requestAnimationFrame(frame);
    };

    frame();

    gsap.fromTo(
        "#bus",
        { x: 0 },
        { x: "200%", ease: "Power4.easeOut", stagger: 0.13, duration: 5 }
    );
    gsap.fromTo(
        ".web-curtain",
        { y: 0 },
        { y: "-100%", ease: "Power4.easeOut", stagger: 0.13, duration: 2, delay: 3 }
    );

};


interface CountdownTimerProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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
            {
                isTimeUp ? (<span></span>) : (<p className="text-black">LAUNCHING IN..</p>)
            }
            <div className="flex justify-center items-center space-x-8">
                {isTimeUp ? (
                    <button onClick={runAnimation} className="bg-red-600 text-white py-2 px-4 rounded z-[999999]">Launch</button>
                ) : (
                    Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
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
