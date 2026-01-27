"use client";

export function VideoBackground() {
    return (
        <>
            <div className="video-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="vignette-overlay" aria-hidden="true" />
        </>
    );
}
