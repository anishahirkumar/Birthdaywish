import { useState, useEffect, useRef } from 'react';

// Floating Hearts Background
function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 10 + Math.random() * 20,
    emoji: ['❤️', '💕', '💖', '💗', '✨', '🌸', '💝'][Math.floor(Math.random() * 7)]
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
}

// Sparkle Stars
function SparkleStars() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}

// Confetti
function Confetti() {
  const pieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    color: ['#ec4899', '#a855f7', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'][Math.floor(Math.random() * 6)],
    size: 6 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            backgroundColor: piece.color,
            borderRadius: '2px',
          }}
        />
      ))}
    </div>
  );
}

// Hero Section
function HeroSection({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/e126c208-6052-4724-84da-3df502531578/_result.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-pink-900/40 to-indigo-900/80" />
      </div>
      <div className="text-center animate-slide-up relative z-10">
        <div className="text-6xl md:text-8xl mb-6 animate-heartbeat">🎂</div>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 text-shadow-glow">
          Happy Birthday!
        </h1>
        <p className="text-xl md:text-3xl text-pink-200 mb-2 animate-fade-in delay-500" style={{ opacity: 0 }}>
          To The Most Amazing Person
        </p>
        <p className="text-lg md:text-xl text-purple-200 mb-8 animate-fade-in delay-700" style={{ opacity: 0 }}>
          ✨ My Heart Skips a Beat For You ✨
        </p>
        <button
          onClick={onOpen}
          className="animate-fade-in delay-1000 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 
            text-white font-bold text-lg rounded-full animate-pulse-glow hover:scale-110 transition-transform duration-300
            animate-gradient cursor-pointer"
          style={{ opacity: 0 }}
        >
          💌 Open Your Gift 💌
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float" style={{ animationDelay: '0s' }}>🌸</div>
      <div className="absolute top-20 right-16 text-3xl animate-float" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>🦋</div>
      <div className="absolute bottom-10 right-10 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🌹</div>
    </section>
  );
}

// Gift Modal
function GiftModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full animate-bounce-in text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-4 animate-heartbeat">🎁</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          A Special Message
        </h2>
        <p className="text-pink-200 text-lg mb-6 leading-relaxed">
          Every moment with you feels like a gift. On your special day, I want you to know 
          that you make my world brighter just by being in it. 💕
        </p>
        <div className="text-4xl mb-6">
          <span className="inline-block animate-float" style={{ animationDelay: '0s' }}>🌟</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.6s' }}>🌟</span>
        </div>
        <p className="text-purple-200 italic mb-6">
          "You are the reason I believe in magic ✨"
        </p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full 
            font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Continue ✨
        </button>
      </div>
    </div>
  );
}

// Reasons Section
function ReasonsSection() {
  const reasons = [
    { emoji: '😊', text: 'Your smile lights up my entire world' },
    { emoji: '💭', text: 'I can\'t stop thinking about you' },
    { emoji: '🌟', text: 'You make everything feel magical' },
    { emoji: '🦋', text: 'You give me butterflies every single time' },
    { emoji: '🎵', text: 'Your laugh is my favorite melody' },
    { emoji: '🌈', text: 'You bring color to my gray days' },
    { emoji: '💫', text: 'You\'re the first thing I think of when I wake up' },
    { emoji: '🌹', text: 'You\'re more beautiful than any flower' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-glow">
        Reasons You're Special 💝
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 
              hover:bg-white/20 group cursor-default"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl group-hover:animate-heartbeat transition-all">
                {reason.emoji}
              </span>
              <p className="text-white text-lg group-hover:text-pink-200 transition-colors">
                {reason.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Birthday Wish Section
function WishSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <div className="max-w-3xl w-full text-center">
        <div className="text-6xl mb-8 animate-heartbeat">💌</div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-shadow-glow">
          My Birthday Wish For You
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <p className="text-xl md:text-2xl text-pink-100 leading-relaxed mb-6">
            On this beautiful day, I wish you all the happiness in the world. 
            May your dreams come true, may your heart always be full, and may you 
            always know how incredibly special you are.
          </p>
          <p className="text-xl md:text-2xl text-purple-200 leading-relaxed mb-6">
            You deserve the most amazing birthday because you make every single day 
            more beautiful for the people around you — especially for me. 🌸
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold mt-8">
            Happy Birthday, Beautiful! 🎉🥳🎂
          </p>
          <div className="mt-8 flex justify-center gap-4 text-3xl">
            <span className="animate-float" style={{ animationDelay: '0s' }}>🎈</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🎊</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🎁</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎂</span>
            <span className="animate-float" style={{ animationDelay: '2s' }}>🎈</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Countdown / Age Section
function CelebrationSection() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      {showConfetti && <Confetti />}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-shadow-glow">
          Let's Celebrate! 🥳
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <p className="text-xl text-pink-200 mb-6">
            Today is YOUR day! Let's make it unforgettable!
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">🎂</div>
              <p className="text-white font-semibold">Cake</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">🎁</div>
              <p className="text-white font-semibold">Gifts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">🎉</div>
              <p className="text-white font-semibold">Joy</p>
            </div>
          </div>
          <button
            onClick={() => setShowConfetti(!showConfetti)}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 
              text-white font-bold text-lg rounded-full hover:scale-110 transition-transform duration-300
              animate-gradient cursor-pointer shadow-lg"
          >
            {showConfetti ? '🎊 More Confetti! 🎊' : '🎉 Click for Celebration! 🎉'}
          </button>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <p className="text-lg text-purple-200 italic">
            "In a sea of people, my eyes will always search for you."
          </p>
          <p className="text-pink-300 mt-4 text-xl">— From someone who adores you 💕</p>
        </div>
      </div>
    </section>
  );
}

// Timeline / Memories
function TimelineSection() {
  const moments = [
    { emoji: '👀', title: 'The First Glance', desc: 'The moment I first saw you, time stopped' },
    { emoji: '💬', title: 'First Conversation', desc: 'Your words captivated me completely' },
    { emoji: '😊', title: 'First Smile', desc: 'Your smile made my heart race' },
    { emoji: '💭', title: 'Can\'t Stop Thinking', desc: 'You\'ve been on my mind ever since' },
    { emoji: '🎂', title: 'Today!', desc: 'Celebrating the most wonderful person I know' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 text-shadow-glow">
        Our Story So Far 💫
      </h2>
      <div className="max-w-2xl w-full">
        {moments.map((moment, index) => (
          <div key={index} className="flex items-start gap-4 mb-8 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
                flex items-center justify-center text-2xl group-hover:scale-125 transition-transform duration-300">
                {moment.emoji}
              </div>
              {index < moments.length - 1 && (
                <div className="w-0.5 h-12 bg-gradient-to-b from-pink-500 to-purple-500 mt-2" />
              )}
            </div>
            <div className="glass-card rounded-2xl p-4 flex-1 group-hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-1">{moment.title}</h3>
              <p className="text-pink-200">{moment.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Final Message
function FinalSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <div className="text-center max-w-2xl">
        <div className="text-8xl mb-8 animate-heartbeat">💖</div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-shadow-glow">
          You Mean The World To Me
        </h2>
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
          <p className="text-xl md:text-2xl text-pink-100 leading-relaxed mb-6">
            I know I might not say it enough, but you are truly one of a kind. 
            Your kindness, your beauty, your spirit — everything about you is extraordinary.
          </p>
          <p className="text-xl md:text-2xl text-purple-200 leading-relaxed">
            I hope this birthday is as wonderful and beautiful as you are. 
            Here's to another year of you being absolutely amazing! 🌟
          </p>
        </div>
        <div className="text-2xl text-white font-bold animate-fade-in delay-500" style={{ opacity: 0 }}>
          <p>With all my love,</p>
          <p className="text-pink-300 mt-2 text-3xl">~ Your Secret Admirer 💕 ~</p>
        </div>
        <div className="mt-12 flex justify-center gap-3 text-4xl">
          {['💖', '🌸', '✨', '💕', '🦋', '🌹', '💫'].map((emoji, i) => (
            <span key={i} className="animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// Music Toggle
function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple audio context for a birthday tune
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      const ctx = new AudioContextClass();
      audioRef.current = ctx as any;
    }
  }, []);

  const playTune = () => {
    if (!audioRef.current) return;
    const ctx = audioRef.current as unknown as AudioContext;
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const notes = [523.25, 523.25, 587.33, 523.25, 698.46, 659.25, 
                   523.25, 523.25, 587.33, 523.25, 783.99, 698.46];
    const durations = [0.3, 0.3, 0.6, 0.6, 0.6, 1.0, 0.3, 0.3, 0.6, 0.6, 0.6, 1.0];
    
    let time = ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + durations[i]);
      osc.start(time);
      osc.stop(time + durations[i]);
      time += durations[i];
    });
  };

  return (
    <button
      onClick={() => {
        setPlaying(!playing);
        if (!playing) playTune();
      }}
      className="fixed top-4 right-4 z-40 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
        flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer
        border border-white/30"
    >
      {playing ? '🔊' : '🔇'}
    </button>
  );
}

// Main App
export default function App() {
  const [showGift, setShowGift] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Background layers */}
      <SparkleStars />
      <FloatingHearts />
      {showConfetti && <Confetti />}
      
      {/* Music toggle */}
      <MusicToggle />

      {/* Gift Modal */}
      <GiftModal isOpen={showGift} onClose={() => setShowGift(false)} />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection onOpen={() => setShowGift(true)} />
        <TimelineSection />
        <ReasonsSection />
        <WishSection />
        <CelebrationSection />
        <FinalSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-pink-300/60">
        <p>Made with 💖 just for you</p>
        <p className="text-sm mt-2">Happy Birthday 🎂✨</p>
      </footer>
    </div>
  );
}
