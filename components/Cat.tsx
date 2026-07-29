export type CatVariant = "caramel" | "gold" | "espresso";

type CatPalette = {
  gradient: [light: string, mid: string, dark: string];
  ink: string;
  shadow: string;
  shadowOpacity: number;
  innerEarOpacity: number;
  highlightOpacity: number;
  eyes: "round" | "closed";
};

// One entry per recolor. Add a new variant here — geometry below never changes.
const palettes: Record<CatVariant, CatPalette> = {
  caramel: {
    gradient: ["#e7c6a6", "#b78f60", "#7c5730"],
    ink: "#4a331e",
    shadow: "#8a6640",
    shadowOpacity: 0.22,
    innerEarOpacity: 0.5,
    highlightOpacity: 0.3,
    eyes: "round",
  },
  gold: {
    gradient: ["#f6e2c4", "#e8cc8b", "#c79a3e"],
    ink: "#4a331e",
    shadow: "#8a6640",
    shadowOpacity: 0.22,
    innerEarOpacity: 0.5,
    highlightOpacity: 0.3,
    eyes: "closed",
  },
  espresso: {
    gradient: ["#8a6640", "#5a3f22", "#2c1c10"],
    ink: "#f6ead8",
    shadow: "#000000",
    shadowOpacity: 0.28,
    innerEarOpacity: 0.22,
    highlightOpacity: 0.16,
    eyes: "closed",
  },
};

type CatProps = {
  /** Unique per instance — becomes the gradient id, since multiple cats share one page. */
  id: string;
  variant: CatVariant;
  className?: string;
};

export function Cat({ id, variant, className }: CatProps) {
  const gradientId = `cat-gradient-${id}`;
  const p = palettes[variant];
  const [light, mid, dark] = p.gradient;
  const fill = `url(#${gradientId})`;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor={light} />
          <stop offset="55%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="100" cy="192" rx="48" ry="8" fill={p.shadow} opacity={p.shadowOpacity} />

      {/* tail, curling from behind the body to the front-right */}
      <path
        d="M148 172 Q180 164 176 128 Q173 106 150 108"
        fill="none"
        stroke={fill}
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* ears (outer, then inner) */}
      <path d="M76 38 L58 8 L94 30 Z" fill={fill} />
      <path d="M124 38 L142 8 L106 30 Z" fill={fill} />
      <path d="M77 34 L66 16 L88 30 Z" fill="#ffffff" opacity={p.innerEarOpacity} />
      <path d="M123 34 L134 16 L112 30 Z" fill="#ffffff" opacity={p.innerEarOpacity} />

      {/* sitting torso + front paws */}
      <path
        d="M100 92 C60 92 48 130 50 165 C51 178 58 188 70 190 L130 190 C142 188 149 178 150 165 C152 130 140 92 100 92 Z"
        fill={fill}
      />
      <ellipse cx="78" cy="186" rx="13" ry="9" fill={fill} />
      <ellipse cx="122" cy="186" rx="13" ry="9" fill={fill} />

      {/* head */}
      <circle cx="100" cy="62" r="36" fill={fill} />
      <ellipse cx="86" cy="50" rx="12" ry="9" fill="#ffffff" opacity={p.highlightOpacity} />

      {/* whiskers */}
      <path
        d="M70 66 L40 60 M70 70 L38 70 M70 74 L40 80"
        fill="none"
        stroke={p.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M130 66 L160 60 M130 70 L162 70 M130 74 L160 80"
        fill="none"
        stroke={p.ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* eyes: round for light-fur variants, soft closed/content for the dark one */}
      {p.eyes === "closed" ? (
        <>
          <path d="M79 60 Q86 54 93 60" stroke={p.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M107 60 Q114 54 121 60" stroke={p.ink} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="86" cy="60" r="5" fill={p.ink} />
          <circle cx="114" cy="60" r="5" fill={p.ink} />
        </>
      )}

      {/* nose + mouth */}
      <path d="M95 72 L105 72 L100 77 Z" fill={p.ink} />
      <path d="M100 77 Q94 83 88 79 M100 77 Q106 83 112 79" stroke={p.ink} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
