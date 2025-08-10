export default function () {
  return (
    <nav className="flex items-center justify-between px-4 py-2 mx-auto max-w-5xl">
      <a href="/">
        <img
          src="/static/logo.png"
          alt="My Travel Blog"
          width={150}
          height={50}
        />
      </a>
      <a
        href="/search"
        className="flex items-center ml-auto"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="block"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <line
            x1="16.5"
            y1="16.5"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </nav>
  );
}
