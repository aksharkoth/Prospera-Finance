export function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-white/10 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}
