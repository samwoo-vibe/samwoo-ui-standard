type StatusTone = "ready" | "pending" | "danger";

export function StatusBadge({ children, tone = "ready" }: { children: string; tone?: StatusTone }) {
  return (
    <span className={`status status-${tone}`}>
      <i aria-hidden="true" />
      {children}
    </span>
  );
}
