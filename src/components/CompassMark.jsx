export default function CompassMark({ size = 64 }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Compass"
    >
      <circle cx="32" cy="32" r="29" stroke="#34d4b8" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="2.5" fill="#34d4b8" />
      <path d="M32 12L38 30L32 34L26 30L32 12Z" fill="#34d4b8" />
      <path d="M32 52L26 34L32 30L38 34L32 52Z" fill="#1c2430" stroke="#34d4b8" strokeWidth="1.2" />
    </svg>
  )
}
