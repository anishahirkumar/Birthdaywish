import { useState, useEffect, useRef, useCallback } from 'react';

/* ─── CANDLE FLAME COMPONENT ─── */
function CandleFlame({ blown, onBlow }: { blown: boolean; onBlow: () => void }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group" onClick={onBlow}>
      {!blown ? (
        <div className="relative">
          <div className="w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-flicker" />
          <div className="absolute -inset-2 bg-yellow-400/30 rounded-full blur-md animate-flicker" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-3 bg-blue-400/60 rounded-full blur-[2px]" />
        </div>
      ) : (
        <div className="relative">
          <div className="w-3 h-3 bg-gray-400/50 rounded-full animate-smoke" />
        </div>
      )}
      <div className="w-3 h-16 bg-gradient-to-b from-pink-300 to-pink-500 rounded-sm mt-1" />
      <div className="text-xs text-pink-300/60 mt-1 group-hover:text-pink-300 transition-colors">
        {blown ? '✓' : 'tap'}
      </div>
    </div>
  );
}

/* ─── SCENE 1: THE WISH ─── */
function WishScene({ onComplete }: { onComplete: () => void }) {
  const [blown, setBlown] = useState(false);
  const [exploded, setExploded] = useState(false);

  const handleBlow = () => {
    if (blown) return;
    setBlown(true);
    setTimeout(() => {
      setExploded(true);
      setTimeout(onComplete, 1200);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0030] to-[#0a0015]" />

      {/* Explosion effect */}
      {exploded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-[200vw] h-[200vw] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-explode" />
        </div>
      )}

      {/* Stars in dark */}
      {!blown && Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        {!blown ? (
          <>
            <p className="text-pink-300/80 text-lg md:text-xl mb-8 tracking-widest uppercase animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              Close your eyes...
            </p>
            <div className="mb-8">
              <div className="relative inline-block cursor-pointer" onClick={handleBlow}>
                <div className="w-6 h-12 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-100 rounded-full animate-flicker mx-auto" />
                <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl animate-flicker" />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-4 bg-blue-400/50 rounded-full blur-[3px]" />
                <div className="w-8 h-28 bg-gradient-to-b from-pink-200 via-pink-400 to-pink-600 rounded-md mx-auto mt-2 shadow-lg shadow-pink-500/30" />
                <div className="w-16 h-4 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full mx-auto mt-1" />
              </div>
            </div>
            <p className="text-white text-2xl md:text-4xl font-light mb-4 animate-fade-in-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
              Make a wish
            </p>
            <p className="text-pink-400 text-sm md:text-base animate-fade-in-up animate-float" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
              ✨ tap the flame to blow it out ✨
            </p>
          </>
        ) : (
          <div className="animate-fade-in-up">
            <p className="text-white text-3xl md:text-5xl font-bold">✨ Wish Granted ✨</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── SCENE 2: LOVE JAR ─── */
function LoveJar() {
  const notes = [
    "Your laugh is my favorite sound in the whole universe 🌌",
    "I memorized the way you say my name 💫",
    "Every song reminds me of you now 🎵",
    "You're the plot twist I never saw coming 📖",
    "My phone's brightest screen is your photo 📱💕",
    "I rehearsed conversations with you in the shower 🚿",
    "You make ordinary days feel extraordinary 🌈",
    "I notice things about you that nobody else does 👀💖",
    "Your voice is my peace in a chaotic world 🕊️",
    "I saved every message you ever sent me 💬",
    "You're the reason I smile at my phone randomly 😊",
    "I'd choose you in every universe, every timeline 🌀",
  ];

  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [wiggle, setWiggle] = useState(false);
  const [usedNotes, setUsedNotes] = useState<number[]>([]);

  const pullNote = () => {
    setWiggle(true);
    setTimeout(() => {
      setWiggle(false);
      const available = notes.map((_, i) => i).filter(i => !usedNotes.includes(i));
      if (available.length === 0) {
        setUsedNotes([]);
        setCurrentNote("You've found them all! You're truly special 💝");
      } else {
        const idx = available[Math.floor(Math.random() * available.length)];
        setUsedNotes([...usedNotes, idx]);
        setCurrentNote(notes[idx]);
      }
    }, 500);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 text-shadow-glow">
        The Love Jar 💌
      </h2>
      <p className="text-pink-300/80 text-center mb-12 text-lg">Tap the jar to pull out a secret note</p>

      {/* Jar */}
      <div
        className={`relative cursor-pointer transition-transform ${wiggle ? 'animate-jar-wiggle' : 'hover:scale-105'}`}
        onClick={pullNote}
      >
        <div className="w-48 h-64 md:w-56 md:h-72 relative">
          {/* Jar lid */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 md:w-36 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg border-2 border-amber-500" />
          {/* Jar body */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-b-3xl rounded-t-xl border-2 border-white/20 overflow-hidden">
            {/* Notes inside */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-6 rounded-sm"
                style={{
                  background: ['#ec4899', '#a855f7', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6', '#f472b6'][i],
                  left: `${15 + (i % 3) * 25}%`,
                  top: `${20 + Math.floor(i / 3) * 25}%`,
                  transform: `rotate(${(i * 15) - 30}deg)`,
                  opacity: 0.8,
                }}
              />
            ))}
          </div>
          {/* Jar shine */}
          <div className="absolute top-8 left-4 w-4 h-20 bg-white/10 rounded-full blur-sm" />
        </div>
      </div>

      {/* Note popup */}
      {currentNote && (
        <div className="mt-8 max-w-md animate-fade-in-up">
          <div className="glass rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-pink-500 rotate-45 rounded-sm" />
            <p className="text-white text-lg md:text-xl text-center leading-relaxed pt-2">
              {currentNote}
            </p>
          </div>
        </div>
      )}

      <p className="text-pink-400/50 text-sm mt-8">
        {usedNotes.length} of {notes.length} notes found
      </p>
    </section>
  );
}

/* ─── SCENE 3: BIRTHDAY CAKE ─── */
function BirthdayCake() {
  const [candles, setCandles] = useState([false, false, false, false, false]);
  const [celebrating, setCelebrating] = useState(false);
  const allBlown = candles.every(c => c);

  useEffect(() => {
    if (allBlown && !celebrating) {
      setTimeout(() => setCelebrating(true), 500);
    }
  }, [allBlown, celebrating]);

  const blowCandle = (index: number) => {
    if (candles[index]) return;
    const newCandles = [...candles];
    newCandles[index] = true;
    setCandles(newCandles);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {celebrating && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-5%',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                width: `${8 + Math.random() * 12}px`,
                height: `${6 + Math.random() * 8}px`,
                backgroundColor: ['#ec4899', '#a855f7', '#f59e0b', '#10b981', '#3b82f6'][Math.floor(Math.random() * 5)],
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              }}
            />
          ))}
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 relative z-10">
        🎂 Your Birthday Cake 🎂
      </h2>
      <p className="text-pink-300/80 text-center mb-12 relative z-10">
        {allBlown ? "🎉 All candles blown! Happy Birthday! 🎉" : "Tap each candle to blow it out"}
      </p>

      {/* Cake */}
      <div className="relative z-10">
        {/* Candles */}
        <div className="flex justify-center gap-6 md:gap-8 mb-2">
          {candles.map((blown, i) => (
            <CandleFlame key={i} blown={blown} onBlow={() => blowCandle(i)} />
          ))}
        </div>

        {/* Cake layers */}
        <div className="flex flex-col items-center">
          {/* Top layer */}
          <div className="w-48 md:w-64 h-16 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-2xl relative overflow-hidden border-t-4 border-pink-200">
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-white/30 to-transparent" />
            {/* Dripping frosting */}
            <div className="absolute -bottom-3 left-4 w-6 h-6 bg-pink-300 rounded-full" />
            <div className="absolute -bottom-4 left-16 w-5 h-8 bg-pink-300 rounded-full" />
            <div className="absolute -bottom-3 right-8 w-6 h-6 bg-pink-300 rounded-full" />
            <div className="absolute -bottom-5 right-20 w-4 h-7 bg-pink-300 rounded-full" />
          </div>
          {/* Middle layer */}
          <div className="w-56 md:w-72 h-14 bg-gradient-to-b from-purple-400 to-purple-500 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-white/20 to-transparent" />
            {/* Decorations */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-around">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-yellow-300 shadow-sm shadow-yellow-300/50" />
              ))}
            </div>
          </div>
          {/* Bottom layer */}
          <div className="w-64 md:w-80 h-16 bg-gradient-to-b from-pink-500 to-pink-600 rounded-b-xl relative overflow-hidden border-b-4 border-pink-700">
            <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-white/15 to-transparent" />
            {/* Sprinkles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-1 rounded-full"
                style={{
                  backgroundColor: ['#fbbf24', '#34d399', '#60a5fa', '#f472b6', '#a78bfa'][i % 5],
                  left: `${5 + i * 8}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  transform: `rotate(${i * 30}deg)`,
                }}
              />
            ))}
          </div>
          {/* Plate */}
          <div className="w-72 md:w-96 h-4 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full mt-1 shadow-lg" />
        </div>
      </div>

      {celebrating && (
        <div className="mt-8 text-center relative z-10 animate-fade-in-up">
          <p className="text-2xl md:text-3xl text-white font-bold">
            🥳 Happy Birthday! 🥳
          </p>
          <p className="text-pink-300 mt-2">May all your wishes come true ✨</p>
        </div>
      )}
    </section>
  );
}

/* ─── SCENE 4: CONSTELLATION ─── */
function ConstellationScene() {
  const [connectedStars, setConnectedStars] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  // Heart shape coordinates (relative %)
  const heartPoints = [
    { x: 50, y: 30 },  // top center
    { x: 35, y: 18 },  // top left
    { x: 20, y: 25 },  // left
    { x: 20, y: 42 },  // mid left
    { x: 35, y: 58 },  // bottom left
    { x: 50, y: 72 },  // bottom center
    { x: 65, y: 58 },  // bottom right
    { x: 80, y: 42 },  // mid right
    { x: 80, y: 25 },  // right
    { x: 65, y: 18 },  // top right
  ];

  const handleStarClick = (index: number) => {
    if (connectedStars.includes(index)) return;
    const nextExpected = connectedStars.length;
    if (index === nextExpected) {
      const newConnected = [...connectedStars, index];
      setConnectedStars(newConnected);
      if (newConnected.length === heartPoints.length) {
        setTimeout(() => setShowMessage(true), 800);
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
        Write Your Name in the Stars ⭐
      </h2>
      <p className="text-pink-300/80 text-center mb-8">
        {connectedStars.length === 0
          ? "Click the glowing star to begin"
          : connectedStars.length < heartPoints.length
          ? `Connect the stars (${connectedStars.length}/${heartPoints.length})`
          : "✨ A heart formed in the cosmos ✨"}
      </p>

      <div className="relative w-full max-w-lg aspect-square">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {connectedStars.map((starIdx, i) => {
            if (i === 0) return null;
            const prev = heartPoints[connectedStars[i - 1]];
            const curr = heartPoints[starIdx];
            return (
              <line
                key={i}
                x1={prev.x}
                y1={prev.y}
                x2={curr.x}
                y2={curr.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.3"
                className="animate-fade-in-up"
                style={{ animationDuration: '0.3s' }}
              />
            );
          })}
          {showMessage && (
            <line
              x1={heartPoints[heartPoints.length - 1].x}
              y1={heartPoints[heartPoints.length - 1].y}
              x2={heartPoints[0].x}
              y2={heartPoints[0].y}
              stroke="url(#lineGrad)"
              strokeWidth="0.3"
            />
          )}
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stars */}
        {heartPoints.map((point, index) => {
          const isConnected = connectedStars.includes(index);
          const isNext = index === connectedStars.length;
          return (
            <div
              key={index}
              className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300
                ${isNext ? 'animate-glow' : ''}
                ${isConnected ? 'scale-125' : 'hover:scale-110'}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onClick={() => handleStarClick(index)}
            >
              <div className={`w-full h-full rounded-full flex items-center justify-center text-xl
                ${isConnected
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/50'
                  : isNext
                  ? 'bg-yellow-400/80 shadow-lg shadow-yellow-400/50'
                  : 'bg-white/20'
                }`}
              >
                {isConnected ? '💖' : isNext ? '⭐' : '·'}
              </div>
            </div>
          );
        })}
      </div>

      {showMessage && (
        <div className="mt-8 text-center animate-fade-in-up">
          <p className="text-2xl md:text-3xl text-white font-bold mb-2">
            You stole my heart 💝
          </p>
          <p className="text-pink-300">...and I never wanted it back</p>
        </div>
      )}
    </section>
  );
}

/* ─── SCENE 5: SCRATCH CARD ─── */
function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Draw golden scratch surface
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#d4a017');
    gradient.addColorStop(0.3, '#f4d03f');
    gradient.addColorStop(0.5, '#d4a017');
    gradient.addColorStop(0.7, '#f4d03f');
    gradient.addColorStop(1, '#d4a017');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add shimmer pattern
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * rect.width, Math.random() * rect.height, Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Text on scratch surface
    ctx.fillStyle = '#8B6914';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH ME ✨', rect.width / 2, rect.height / 2);
  }, []);

  const scratch = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left);
    const y = (clientY - rect.top);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Check how much is revealed
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percentage = transparent / (imageData.data.length / 4);
    if (percentage > 0.5 && !revealed) {
      setRevealed(true);
    }
  }, [revealed]);

  const handleMouseDown = () => setIsDrawing(true);
  const handleMouseUp = () => setIsDrawing(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    scratch(e.clientX, e.clientY);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
        Your Secret Message 🤫
      </h2>
      <p className="text-pink-300/80 text-center mb-8">
        Scratch the card to reveal what's underneath
      </p>

      <div className="relative w-80 h-48 md:w-96 md:h-56 rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
        {/* Hidden message underneath */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-bold mb-2">
              I have a crush on you 💕
            </p>
            <p className="text-pink-200 text-sm md:text-base">
              ...and I wanted to tell you in the most special way
            </p>
            <p className="text-3xl mt-4">😍</p>
          </div>
        </div>

        {/* Scratch canvas on top */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full scratch-canvas"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            scratch(touch.clientX, touch.clientY);
          }}
        />
      </div>

      {revealed && (
        <div className="mt-8 animate-fade-in-up text-center">
          <p className="text-2xl text-white animate-heartbeat inline-block">💖</p>
          <p className="text-pink-300 mt-2">Now you know my secret...</p>
        </div>
      )}
    </section>
  );
}

/* ─── SCENE 6: TYPEWRITER LOVE LETTER ─── */
function LoveLetter() {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const fullLetter = `Dear You,

I've been carrying these words in my heart for a while now, and your birthday felt like the perfect moment to finally let them out.

Every time I see you, my day gets better. Your smile is contagious, your kindness is rare, and your presence makes everything feel right.

I don't need anything in return — just know that someone out here thinks the world of you. You deserve all the love, happiness, and magic this life has to offer.

Happy Birthday, beautiful soul. 🌸

With all my heart,
Someone who adores you 💕`;

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullLetter.length) {
        setDisplayedText(fullLetter.slice(0, index + 1));
        index++;
        // Auto-scroll
        if (letterRef.current) {
          letterRef.current.scrollTop = letterRef.current.scrollHeight;
        }
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
        A Letter For You ✉️
      </h2>

      {!started ? (
        <button
          onClick={() => setStarted(true)}
          className="glass px-8 py-4 rounded-full text-white text-lg font-semibold
            hover:scale-105 transition-transform animate-glow cursor-pointer"
        >
          💌 Open the letter
        </button>
      ) : (
        <div
          ref={letterRef}
          className="glass rounded-2xl p-8 max-w-lg w-full max-h-[60vh] overflow-y-auto"
        >
          <pre className="text-white/90 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-serif">
            {displayedText}
            <span className="inline-block w-0.5 h-5 bg-pink-400 ml-0.5 animate-pulse" />
          </pre>
        </div>
      )}
    </section>
  );
}

/* ─── SCENE 7: FINALE ─── */
function Finale() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          💖
        </div>
      ))}

      {show && (
        <div className="text-center relative z-10">
          <div className="text-8xl mb-8 animate-heartbeat">💝</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Happy Birthday
          </h2>
          <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient font-bold mb-8">
            To My Favorite Person
          </p>
          <div className="glass rounded-3xl p-8 max-w-md mx-auto mb-8">
            <p className="text-pink-200 text-lg leading-relaxed">
              Thank you for existing. The world is better because you're in it, 
              and my world is infinitely better because I know you.
            </p>
            <p className="text-white text-xl font-bold mt-6">
              Here's to you 🥂✨
            </p>
          </div>

          <div className="flex justify-center gap-2 text-3xl">
            {['🎂', '🎈', '🎁', '🎊', '🎉', '💖', '✨'].map((e, i) => (
              <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                {e}
              </span>
            ))}
          </div>

          <p className="text-pink-400/50 text-sm mt-16">
            Made with 💖 just for you
          </p>
        </div>
      )}
    </section>
  );
}

/* ─── NAVIGATION DOTS ─── */
function NavDots({ active, total, onNavigate }: { active: number; total: number; onNavigate: (i: number) => void }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
            ${i === active
              ? 'bg-pink-400 scale-125 shadow-lg shadow-pink-400/50'
              : 'bg-white/30 hover:bg-white/50'
            }`}
        />
      ))}
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [scene, setScene] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenes = [
    { id: 'wish', label: '🕯️' },
    { id: 'jar', label: '🫙' },
    { id: 'cake', label: '🎂' },
    { id: 'constellation', label: '⭐' },
    { id: 'scratch', label: '🎫' },
    { id: 'letter', label: '✉️' },
    { id: 'finale', label: '💝' },
  ];

  const handleWishComplete = () => {
    setStarted(true);
    setScene(1);
  };

  const navigateTo = (index: number) => {
    if (index === 0 && !started) return;
    setScene(index);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0a0015] via-[#1a0030] to-[#0d001a] relative">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      {started && (
        <NavDots active={scene} total={scenes.length} onNavigate={navigateTo} />
      )}

      {/* Scene transitions */}
      <div className="relative z-10">
        {scene === 0 && <WishScene onComplete={handleWishComplete} />}
        {scene === 1 && <LoveJar />}
        {scene === 2 && <BirthdayCake />}
        {scene === 3 && <ConstellationScene />}
        {scene === 4 && <ScratchCard />}
        {scene === 5 && <LoveLetter />}
        {scene === 6 && <Finale />}
      </div>

      {/* Scene navigation arrows */}
      {started && scene > 0 && (
        <button
          onClick={() => setScene(scene - 1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full glass
            flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
        >
          ←
        </button>
      )}
      {started && scene < scenes.length - 1 && (
        <button
          onClick={() => setScene(scene + 1)}
          className="fixed right-12 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full glass
            flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
        >
          →
        </button>
      )}
    </div>
  );
}
