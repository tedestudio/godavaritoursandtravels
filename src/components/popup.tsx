// components/Popup.tsx
import { useEffect } from 'react';

interface PopupProps {
    message: string;
    duration: number;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, duration, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[10000]">
            <div id='thankyou' className="bg-white w-full lg:w-2/3 h-1/2 relative rounded flex items-center justify-center lg:justify-end shadow-xl text-center p-6">
                <img src="/kandula.png" alt="" className='absolute bottom-0 left-0 w-1/2 h-auto' />
                <p className="text-black text-xs  lg:text-lg flex flex-col z-10 w-2/3 text-center lg:text-right items-end">
                    <h1 className='text-2xl lg:text-6xl py-2'>Thank You!</h1>
                    We extend our heartfelt gratitude to <h1 className='text-lg lg:text-3xl py-2'>Sri Kandula Durgesh</h1><h1 className='text-xs lg:text-lg py-1'>Hon'ble Minister of Tourism, Culture, and Cinematography</h1>for graciously launching the official website of Godavari Tours and Travels. Your support and presence mark the beginning of an exciting journey for us.

                    Thank you for being a part of this special occasion!
                </p>
            </div>
        </div>
    );
};

export default Popup;
