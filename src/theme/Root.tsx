import React, { ReactNode, useState, useEffect } from 'react';
import Head from '@docusaurus/Head';

interface Props {
    children: ReactNode;
}

export default function Root({ children }: Props): JSX.Element {
    // Example state: toggle this to true to activate your blur
    const [isLocked, setIsLocked] = useState<boolean>(false);

    return (
        <div className={isLocked ? 'hidden-content' : 'site-wrapper'}>
            {/* Injecting the Inter font via Head for TS safety */}
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            {children}

            {isLocked && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'var(--orange)',
                    zIndex: 9999,
                    fontWeight: 'bold',
                    letterSpacing: '2px'
                }}>
                    ACCESS_RESTRICTED // ENCRYPTED_SESSION
                </div>
            )}
        </div>
    );
}