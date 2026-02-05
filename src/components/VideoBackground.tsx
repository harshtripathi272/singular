"use client";

import { useRef, useEffect, useState } from "react";

export function VideoBackground() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {/* Loading state */}
            {!isLoaded && (
                <div className="video-background bg-black flex items-center justify-center">
                    <div className="text-white/30 text-sm tracking-widest animate-pulse">
                        LOADING
                    </div>
                </div>
            )}
            
            <div className={`video-background ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                 style={{ transition: 'opacity 0.5s ease-out' }}>
                <SafeVideo onLoaded={() => setIsLoaded(true)} />
            </div>
            <div className="vignette-overlay" aria-hidden="true" />
        </>
    );
}

function SafeVideo({ onLoaded }: { onLoaded: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            onLoaded();
        };

        const playVideo = async () => {
            try {
                await video.play();
            } catch (err) {
                console.warn("Video autoplay prevented:", err);
                // Still mark as loaded even if autoplay fails
                onLoaded();
            }
        };

        video.addEventListener('canplaythrough', handleCanPlay);
        playVideo();

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlay);
        };
    }, [onLoaded]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
            style={{ willChange: 'transform' }}
        >
            <source src="/video-final.mp4" type="video/mp4" />
        </video>
    );
}
