import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from "lucide-react";

interface HeroVideoPlayerProps {
  className?: string;
}

const HERO_VIDEO_URL =
  "https://instagram.fcgh9-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQPvo8joQzzo_5lC1NSwW7V5wxeCDPqRybyQSp_oB8hovRdHDGjSr3S9uk-X7AYuF4XeHZSKf899rhqmeEQP1VxzrJcWsaUYTGQQW00.mp4?_nc_cat=103&_nc_oc=AdqKDHC5tfYhx6Di6snTUVVNOu9_LUrcM54vZfWKtDr0h7MT1rniC-UKl377oAZelOXheX0mueko7kQTlkuVM0bU&_nc_sid=5e9851&_nc_ht=instagram.fcgh9-1.fna.fbcdn.net&_nc_ohc=JEVFst7U7koQ7kNvwHz3oEv&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuMzYwLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6MTQxMzA4NjA0NjYwMDcxNiwiYXNzZXRfYWdlX2RheXMiOjQ2MSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjkxLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=ee502f524df46138&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DRTQzMTA0ODc2QUE2QUYxRTUwREMyRTUxQkVCMTRBQl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYRmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC82MDU4MTM3ODUzNTQ4NDlfODgyMzQyODkyODkzMDcwNjc4OS5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmmPjBvbfMggUVAigCQzMsF0BW2ZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzNfdjERAHX-B2XmnQEA&_nc_gid=X1hNguFGzPcnVkF44-79Kg&_nc_ss=7b689&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQLGTEgeZuYYrOIqyyDgAETAi7Gjj1ZX7RVPFIo3TJEEDw&oe=6AB74D00";

export default function HeroVideoPlayer({ className = "" }: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setHasError(true);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("error", handleError);

    // Auto-attempt playback
    video.play().catch(() => {
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[380px] md:min-h-[460px] rounded-2xl overflow-hidden bg-[#0a0f29] border border-white/10 shadow-2xl group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => setShowControls(true)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        className="w-full h-full object-cover object-center cursor-pointer"
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
      />

      {/* Fallback if error */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#070b1e]/90 text-white z-20">
          <p className="text-sm font-medium mb-3">Vídeo institucional Autosim</p>
          <button
            type="button"
            onClick={restartVideo}
            className="px-4 py-2 bg-[#f26522] text-white rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-[#d94f11] transition-colors"
          >
            <RotateCcw size={14} /> Tentar novamente
          </button>
        </div>
      )}

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs text-white">
        <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
        <span className="font-medium tracking-wide">Vídeo Institucional Autosim</span>
      </div>

      {/* Audio Indicator Badge */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleMute();
        }}
        className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs text-white transition-all cursor-pointer shadow-lg"
        title={isMuted ? "Ativar áudio" : "Mutar áudio"}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-[#f26522]" />}
        <span className="text-[11px] font-medium">{isMuted ? "Sem áudio (clique para ouvir)" : "Áudio ativo"}</span>
      </button>

      {/* Center Big Play Button (when paused) */}
      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#f26522]/90 hover:bg-[#f26522] text-white flex items-center justify-center shadow-xl shadow-orange-500/30 transition-transform transform hover:scale-110 z-20 cursor-pointer"
          aria-label="Reproduzir vídeo"
        >
          <Play size={28} className="ml-1" fill="currentColor" />
        </button>
      )}

      {/* Bottom Controls Bar */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        {/* Progress bar */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
          <div
            className="h-full bg-[#f26522] transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="hover:text-[#f26522] transition-colors cursor-pointer p-1"
              aria-label={isPlaying ? "Pausar" : "Play"}
            >
              {isPlaying ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="hover:text-[#f26522] transition-colors cursor-pointer p-1"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            <span className="text-white/70 text-[11px] font-sans">Apresentação da Rede Autosim</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={restartVideo}
              className="hover:text-[#f26522] transition-colors cursor-pointer p-1"
              title="Reiniciar vídeo"
            >
              <RotateCcw size={15} />
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="hover:text-[#f26522] transition-colors cursor-pointer p-1"
              title="Tela cheia"
            >
              <Maximize2 size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
