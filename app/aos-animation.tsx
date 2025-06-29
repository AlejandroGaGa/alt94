'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = ({ children }: { children: React.ReactNode }) => {
    console.log('AosAnimation');
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            {children}
        </div>
    )
}

export default AosAnimation;