import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrent(audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
  };

  const handleLoaded = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const val = Number(e.target.value);
    audioRef.current.currentTime = (val / 100) * audioRef.current.duration;
    setProgress(val);
  };

  const handleEnded = () => setPlaying(false);

  useEffect(() => {
    return () => { audioRef.current?.pause(); };
  }, []);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-800 rounded-xl p-5 flex items-center gap-5 border border-slate-700">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={handleEnded}
      />

      <button
        onClick={toggle}
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0 hover:bg-blue-500 transition"
      >
        {playing
          ? <Pause size={18} className="text-white" />
          : <Play size={18} className="text-white ml-0.5" />
        }
      </button>

      <div className="flex-1 min-w-0">
        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={handleScrub}
          className="w-full h-1.5 rounded-full appearance-none bg-slate-600 accent-blue-500 cursor-pointer mb-2"
        />
        <div className="flex justify-between text-xs text-slate-500">
          <span>{fmt(current)}</span>
          <span>{duration ? fmt(duration) : '--:--'}</span>
        </div>
      </div>
    </div>
  );
}
