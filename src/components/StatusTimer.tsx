import React, { useState, useEffect } from 'react';

export const StatusTimer = (): JSX.Element => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ color: '#ff9800', fontSize: '0.8rem', fontFamily: 'monospace' }}>
            SYSTEM_STATUS: ACTIVE // {time}
        </div>
    );
};