import { useEffect, useRef, useState } from 'react';

type Track = 'essay' | 'discussion' | 'video';

interface Props {
  audioUrl?: string;
  discussionUrl?: string;
  videoUrl?: string;
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

function LinkIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function formatTime(s: number) {
  if (!s || isNaN(s) || !isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export default function MediaPlayer({ audioUrl, discussionUrl, videoUrl }: Props) {
  const availableTracks: Track[] = [
    ...(audioUrl      ? (['essay']      as Track[]) : []),
    ...(discussionUrl ? (['discussion'] as Track[]) : []),
    ...(videoUrl      ? (['video']      as Track[]) : []),
  ];

  const [track, setTrack]             = useState<Track>(availableTracks[0] ?? 'essay');
  const [playing, setPlaying]         = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]       = useState(0);
  const [trackCopied, setTrackCopied] = useState(false);
  const audioEl = useRef<HTMLAudioElement>(null);

  // Read ?play= param on mount and jump to that track
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const play = params.get('play') as Track | null;
    if (play && availableTracks.includes(play)) {
      setTrack(play);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (availableTracks.length === 0) return null;

  const showTabs = availableTracks.length > 1;

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

  function copyTrackLink() {
    const url = `${window.location.origin}${window.location.pathname}?play=${track}`;
    navigator.clipboard.writeText(url);
    setTrackCopied(true);
    setTimeout(() => setTrackCopied(false), 2000);
  }

  const tabLabel: Record<Track, string> = {
    essay:      '🎙 Listen to Essay',
    discussion: '🤖 AI Discussion',
    video:      '🎬 Explainer Video',
  };

  const activeAudioUrl = track === 'essay' ? audioUrl : track === 'discussion' ? discussionUrl : undefined;

  return (
    <div className="mb-8 bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden">

      {/* Track tabs — only when multiple tracks exist */}
      {showTabs && (
        <div className="flex border-b border-slate-700">
          {availableTracks.map(t => (
            <button
              key={t}
              onClick={() => switchTrack(t)}
              className={`flex-1 py-2.5 text-sm font-medium transition ${
                track === t
                  ? 'text-white border-b-2 border-blue-500 bg-slate-800/80'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tabLabel[t]}
            </button>
          ))}
        </div>
      )}

      {/* Video player */}
      {track === 'video' && videoUrl && (
        <video
          key={videoUrl}
          src={videoUrl}
          controls
          className="w-full max-h-[480px] bg-black"
        />
      )}

      {/* Audio controls — only for non-video tracks */}
      {track !== 'video' && (
        <div className="flex items-center gap-3 px-4 py-3">

          {/* Label when only one track */}
          {!showTabs && (
            <span className="text-xs font-medium text-slate-400 shrink-0">
              {tabLabel[track]}
            </span>
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
      )}

      {/* Per-track share link */}
      <div className="px-4 pb-3 flex justify-end">
        <button
          onClick={copyTrackLink}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition"
        >
          <LinkIcon />
          {trackCopied ? 'Link copied!' : `Share ${tabLabel[track]}`}
        </button>
      </div>

      {/* Hidden audio element — key forces remount on track switch */}
      {activeAudioUrl && track !== 'video' && (
        <audio
          key={activeAudioUrl}
          ref={audioEl}
          src={activeAudioUrl}
          onTimeUpdate={() => setCurrentTime(audioEl.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(audioEl.current?.duration ?? 0)}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}
