"use client";

import { useRef, useEffect, useState } from "react";

export function VideoBackground() {
    const [isReady, setIsReady] = useState(false);

    return (
        <>
            {/* Dark background that fades out when video is ready */}
            <div 
                className={`video-background bg-black transition-opacity duration-700 ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            />
            
            {/* Video - always visible, loads in parallel */}
            <div className="video-background">
                <SafeVideo onReady={() => setIsReady(true)} />
            </div>
            <div className="vignette-overlay" aria-hidden="true" />
        </>
    );
}

function SafeVideo({ onReady }: { onReady: () => void }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Mark ready as soon as we have any data
        const handleLoadedData = () => {
            onReady();
        };

        const playVideo = async () => {
            try {
                await video.play();
                onReady(); // Also mark ready on play success
            } catch (err) {
                console.warn("Video autoplay prevented:", err);
                onReady();
            }
        };

        video.addEventListener('loadeddata', handleLoadedData);
        
        // Start playing immediately
        if (video.readyState >= 2) {
            onReady();
        }
        
        playVideo();

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
        };
    }, [onReady]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
        >
            {/* Use cache-busting query param */}
            <source src="/video-final.mp4?v=2" type="video/mp4" />
        </video>
    );
}
