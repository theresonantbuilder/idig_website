import { useRef, useState, useEffect } from 'react';

type View = 'menu' | 'essay' | 'discussion';

function HeadphoneIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
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

interface Props {
  audioUrl?: string;
  discussionUrl?: string;
}

export default function AudioDropdown({ audioUrl, discussionUrl }: Props) {
  const [open, setOpen]               = useState(false);
  const [view, setView]               = useState<View>('menu');
  const [playing, setPlaying]         = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]       = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const audioEl    = useRef<HTMLAudioElement>(null);

  // Click outside to close
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        handleClose();
      }
    }
    if (open) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  function handleClose() {
    audioEl.current?.pause();
    setPlaying(false);
    setCurrentTime(0);
    setView('menu');
    setOpen(false);
  }

  function goToMenu() {
    audioEl.current?.pause();
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setView('menu');
  }

  function selectTrack(track: 'essay' | 'discussion') {
    audioEl.current?.pause();
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setView(track);
  }

  function togglePlay() {
    const el = audioEl.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play();
      setPlaying(true);
    }
  }

  const activeUrl  = view === 'essay' ? audioUrl : view === 'discussion' ? discussionUrl : undefined;
  const trackLabel = view === 'essay' ? 'Listen to Essay' : 'AI Discussion';

  return (
    <div
      className="relative"
      ref={wrapperRef}
      onClick={e => e.stopPropagation()}
    >
      {/* Trigger button */}
      <button
        onClick={() => open ? handleClose() : setOpen(true)}
        className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs transition ${
          open
            ? 'bg-blue-900/50 border-blue-600/60 text-blue-300'
            : 'bg-slate-700/40 border-slate-600/50 text-slate-400 hover:border-blue-600/50 hover:text-blue-300'
        }`}
        title="Audio options"
      >
        <HeadphoneIcon />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-0 top-full mt-1.5 z-30 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl overflow-hidden w-56">

          {view === 'menu' ? (
            <>
              <button
                onClick={() => audioUrl && selectTrack('essay')}
                disabled={!audioUrl}
                className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition ${
                  audioUrl
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700/60 cursor-pointer'
                    : 'text-slate-500 cursor-not-allowed'
                }`}
              >
                <HeadphoneIcon className="w-4 h-4 shrink-0" />
                <span>Listen to Essay</span>
                {!audioUrl && <span className="ml-auto text-xs text-slate-600">Soon</span>}
              </button>

              <div className="border-t border-slate-700/60" />

              <button
                onClick={() => discussionUrl && selectTrack('discussion')}
                disabled={!discussionUrl}
                className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm text-left transition ${
                  discussionUrl
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700/60 cursor-pointer'
                    : 'text-slate-500 cursor-not-allowed'
                }`}
              >
                <HeadphoneIcon className="w-4 h-4 shrink-0" />
                <span>AI Discussion</span>
                {!discussionUrl && <span className="ml-auto text-xs text-slate-600">Soon</span>}
              </button>
            </>
          ) : (
            <div className="p-3">
              {/* Back + track label */}
              <div className="flex items-center gap-2 mb-3">
                <button
                  onClick={goToMenu}
                  className="text-slate-500 hover:text-slate-300 transition text-xs flex items-center gap-1"
                >
                  ← Back
                </button>
                <span className="text-xs text-slate-400 font-medium truncate">{trackLabel}</span>
              </div>

              {/* Hidden audio element */}
              {activeUrl && (
                <audio
                  ref={audioEl}
                  src={activeUrl}
                  onTimeUpdate={() => setCurrentTime(audioEl.current?.currentTime ?? 0)}
                  onLoadedMetadata={() => setDuration(audioEl.current?.duration ?? 0)}
                  onEnded={() => setPlaying(false)}
                />
              )}

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  disabled={!activeUrl}
                  className="shrink-0 w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {playing ? <PauseIcon /> : <PlayIcon />}
                </button>

                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  step={0.1}
                  disabled={!activeUrl}
                  onChange={e => {
                    const val = parseFloat(e.target.value);
                    if (audioEl.current) audioEl.current.currentTime = val;
                    setCurrentTime(val);
                  }}
                  className="flex-1 h-1 accent-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                />

                <span className="text-xs text-slate-500 shrink-0 tabular-nums w-9 text-right">
                  {formatTime(currentTime)}
                </span>
              </div>

              {!activeUrl && (
                <p className="text-xs text-slate-600 mt-2.5 text-center">Audio coming soon</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
