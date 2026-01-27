"use client";

import { useRef, useEffect } from "react";

export function VideoBackground() {
    return (
        <>
            <div className="video-background">
                <SafeVideo />
            </div>
            <div className="vignette-overlay" aria-hidden="true" />
        </>
    );
}

function SafeVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Prevent crash on play() failure
        const playVideo = async () => {
            try {
                await video.play();
            } catch (err) {
                console.warn("Video autoplay prevented:", err);
            }
        };

        playVideo();
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="object-cover w-full h-full"
        >
            <source src="/video.mp4" type="video/mp4" />
        </video>
    );
}
