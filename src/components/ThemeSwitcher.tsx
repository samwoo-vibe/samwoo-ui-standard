export type ThemeMode = "system" | "light" | "dark";

const labels: Record<ThemeMode, string> = {
  system: "시스템 설정",
  light: "라이트 모드",
  dark: "다크 모드",
};

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
      </svg>
    );
  }

  if (mode === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 15.2A8.2 8.2 0 0 1 8.8 4 8.2 8.2 0 1 0 20 15.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4.5" width="16" height="11.5" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  );
}
export function ThemeSwitcher({ mode, onChange }: { mode: ThemeMode; onChange: (mode: ThemeMode) => void }) {
  const modes: ThemeMode[] = ["system", "light", "dark"];

  return (
    <div className="theme-switcher" role="group" aria-label="화면 테마">
      {modes.map((item) => (
        <button
          key={item}
          type="button"
          className={item === mode ? "selected" : ""}
          aria-label={labels[item]}
          aria-pressed={item === mode}
          onClick={() => onChange(item)}
        >
          <ThemeIcon mode={item} />
        </button>
      ))}
    </div>
  );
}
