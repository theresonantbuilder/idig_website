import { useRef, useState } from 'react';

type Track = 'essay' | 'discussion';

interface Props {
  audioUrl?: string;
  discussionUrl?: string;
}

function PlayIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function formatTime(s: number) {
  if (!s || isNaN(s) || !isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export default function MediaPlayer({ audioUrl, discussionUrl }: Props) {
  const hasBoth = !!audioUrl && !!discussionUrl;
  const [track, setTrack]         = useState<Track>(audioUrl ? 'essay' : 'discussion');
  const [playing, setPlaying]     = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]   = useState(0);
  const audioEl = useRef<HTMLAudioElement>(null);

  if (!audioUrl && !discussionUrl) return null;

  const activeUrl   = track === 'essay' ? audioUrl : discussionUrl;
  const trackLabel  = track === 'essay' ? 'Listen to Essay' : 'AI Discussion';

  function switchTrack(t: Track) {
    if (t === track) return;
    audioEl.current?.pause();
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setTrack(t);
  }

  function togglePlay() {
    const el = audioEl.current;
    if (!el) return;
    if (playing) { el.pause(); setPlaying(false); }
    else         { el.play();  setPlaying(true);  }
  }

  return (
    <div className="mb-8 bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden">

      {/* Track tabs — only when both tracks exist */}
      {hasBoth && (
        <div className="flex border-b border-slate-700">
          {(['essay', 'discussion'] as Track[]).map(t => (
            <button
              key={t}
              onClick={() => switchTrack(t)}
              className={`flex-1 py-2.5 text-sm font-medium transition ${
                track === t
                  ? 'text-white border-b-2 border-blue-500 bg-slate-800/80'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t === 'essay' ? 'Listen to Essay' : 'AI Discussion'}
            </button>
          ))}
        </div>
      )}

      {/* Controls row */}
      <div className="flex items-center gap-3 px-4 py-3">

        {/* Label when only one track */}
        {!hasBoth && (
          <span className="text-xs font-medium text-slate-400 shrink-0">{trackLabel}</span>
        )}

        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="shrink-0 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* Current time */}
        <span className="text-xs text-slate-500 tabular-nums shrink-0 w-9 text-right">
          {formatTime(currentTime)}
        </span>

        {/* Scrub bar */}
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          step={0.1}
          onChange={e => {
            const val = parseFloat(e.target.value);
            if (audioEl.current) audioEl.current.currentTime = val;
            setCurrentTime(val);
          }}
          className="flex-1 min-w-0 h-1 accent-blue-500 cursor-pointer"
        />

        {/* Duration */}
        <span className="text-xs text-slate-500 tabular-nums shrink-0 w-9">
          {formatTime(duration)}
        </span>
      </div>

      {/* Hidden audio element — key forces remount on track switch */}
      {activeUrl && (
        <audio
          key={activeUrl}
          ref={audioEl}
          src={activeUrl}
          onTimeUpdate={() => setCurrentTime(audioEl.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(audioEl.current?.duration ?? 0)}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}
