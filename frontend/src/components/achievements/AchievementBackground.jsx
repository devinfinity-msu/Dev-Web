// import React, { useMemo } from 'react';
// import { Sparkles } from 'lucide-react';

// export const AchievementBackground = () => {
//   const particles = useMemo(
//     () =>
//       Array.from({ length: 42 }, (_, index) => ({
//         id: index,
//         left: `${(index * 37.7) % 100}%`,
//         top: `${(index * 61.3) % 100}%`,
//         size: `${2 + (index % 3)}px`,
//         duration: `${5 + (index % 6)}s`,
//         delay: `${-(index % 7)}s`,
//       })),
//     []
//   );

//   return (
//     <div className="achievement-background" aria-hidden="true">
//       {/* Deep atmospheric layers */}
//       <div className="achievement-vignette" />

//       <div className="aurora aurora-blue" />
//       <div className="aurora aurora-cyan" />
//       <div className="aurora aurora-violet" />

//       {/* Soft horizon */}
//       <div className="achievement-horizon" />

//       {/* Particles */}
//       <div className="achievement-particles">
//         {particles.map((particle) => (
//           <span
//             key={particle.id}
//             className="achievement-particle"
//             style={{
//               left: particle.left,
//               top: particle.top,
//               width: particle.size,
//               height: particle.size,
//               animationDuration: particle.duration,
//               animationDelay: particle.delay,
//             }}
//           />
//         ))}
//       </div>

//       {/* Shooting stars */}
//       <div className="shooting-star shooting-star-one" />
//       <div className="shooting-star shooting-star-two" />
//       <div className="shooting-star shooting-star-three" />

//       {/* Infinity energy */}
//       <div className="infinity-energy">
//         <svg
//           viewBox="0 0 900 430"
//           className="infinity-svg"
//           fill="none"
//         >
//           <defs>
//             <linearGradient
//               id="infinityGradient"
//               x1="120"
//               y1="210"
//               x2="780"
//               y2="210"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#3b82f6" stopOpacity="0" />
//               <stop offset="0.2" stopColor="#3b82f6" />
//               <stop offset="0.5" stopColor="#06b6d4" />
//               <stop offset="0.8" stopColor="#8b5cf6" />
//               <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
//             </linearGradient>

//             <filter id="infinityGlow">
//               <feGaussianBlur stdDeviation="8" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           <path
//             className="infinity-glow-path"
//             d="
//               M 125 215
//               C 125 90, 285 65, 450 215
//               C 615 365, 775 340, 775 215
//               C 775 90, 615 65, 450 215
//               C 285 365, 125 340, 125 215
//             "
//             stroke="url(#infinityGradient)"
//             strokeWidth="3"
//             filter="url(#infinityGlow)"
//           />

//           <path
//             className="infinity-core-path"
//             d="
//               M 125 215
//               C 125 90, 285 65, 450 215
//               C 615 365, 775 340, 775 215
//               C 775 90, 615 65, 450 215
//               C 285 365, 125 340, 125 215
//             "
//             stroke="url(#infinityGradient)"
//             strokeWidth="1"
//           />
//         </svg>

//         <div className="infinity-center">
//           <Sparkles size={18} />
//         </div>
//       </div>

//       {/* Atmospheric rings */}
//       <div className="atmosphere-ring atmosphere-ring-one" />
//       <div className="atmosphere-ring atmosphere-ring-two" />
//     </div>
//   );
// };



import React from 'react';

const Bubble = ({ className }) => (
  <span className={`achievement-bubble ${className}`} />
);

const Starfish = ({ className }) => (
  <div className={`achievement-starfish ${className}`}>
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
);

const Jellyfish = ({ className }) => (
  <div className={`achievement-jellyfish ${className}`}>
    <div className="jellyfish-head" />

    <div className="jellyfish-tentacles">
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
);

export const AchievementBackground = () => {
  return (
    <div
      className="achievement-background"
      aria-hidden="true"
    >
      {/* Main underwater glow */}
      <div className="underwater-glow" />

      {/* Light coming from the surface */}
      <div className="water-ray ray-one" />
      <div className="water-ray ray-two" />
      <div className="water-ray ray-three" />
      <div className="water-ray ray-four" />

      {/* Large background infinity */}
      <div className="background-infinity">
        ∞
      </div>

      {/* Bubbles */}
      <Bubble className="bubble-one" />
      <Bubble className="bubble-two" />
      <Bubble className="bubble-three" />
      <Bubble className="bubble-four" />
      <Bubble className="bubble-five" />
      <Bubble className="bubble-six" />
      <Bubble className="bubble-seven" />
      <Bubble className="bubble-eight" />
      <Bubble className="bubble-nine" />
      <Bubble className="bubble-ten" />

      {/* Starfish */}
      <Starfish className="starfish-left" />
      <Starfish className="starfish-right" />

      {/* Jellyfish */}
      <Jellyfish className="jellyfish-left" />
      <Jellyfish className="jellyfish-right" />

      {/* Tiny underwater particles */}
      <div className="underwater-particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      {/* Bottom ocean mist */}
      <div className="ocean-floor-glow" />

      {/* Subtle vignette */}
      <div className="ocean-vignette" />
    </div>
  );
};

export default AchievementBackground;