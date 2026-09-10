"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type VideoItem = {
  src: string;
  label: string;
};

const VIDEOS: VideoItem[] = [
  { src: "/videos/video-marca.mp4", label: "Nuestra marca" },
  { src: "/videos/video-bobinado.mp4", label: "Bobinado en taller" },
  { src: "/videos/video-testimonio.mp4", label: "Testimonio de cliente" },
];

function VideoCard({ src, label }: VideoItem) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] w-[75%] shrink-0 snap-center overflow-hidden rounded-2xl bg-navy-900 sm:w-auto"
    >
      {loaded ? (
        <>
          <video
            ref={videoRef}
            src={src}
            aria-label={`Video: ${label}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onClick={togglePlay}
            className="h-full w-full cursor-pointer object-cover"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-navy-950/90 to-transparent p-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? "Pausar video" : "Reproducir video"}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-90 backdrop-blur transition-colors hover:bg-accent group-hover:opacity-100"
            >
              {playing ? (
                <Pause className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Play className="h-4 w-4" strokeWidth={2.5} />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-90 backdrop-blur transition-colors hover:bg-accent group-hover:opacity-100"
            >
              {muted ? (
                <VolumeX className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Volume2 className="h-4 w-4" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </>
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Cargar y reproducir video: ${label}`}
          className="flex h-full w-full items-center justify-center bg-navy-900"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white transition-transform group-hover:scale-105">
            <Play className="h-6 w-6 translate-x-0.5" strokeWidth={2.5} />
          </span>
        </button>
      )}
    </div>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-light">
            Nuestro trabajo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Así trabajamos
          </h2>
          <p className="mt-4 text-white/70">
            Mirá nuestra marca, el taller de bobinado y el testimonio de un
            cliente. Los videos empiezan silenciados: tocá el ícono de sonido
            para escucharlos.
          </p>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {VIDEOS.map((video) => (
            <VideoCard key={video.src} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
