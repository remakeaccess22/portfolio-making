export function NavItem({ href, children, active = false }) {
  const baseClass =
    "text-l font-bold transition-all duration-300 [font-family:Satoshi]";

  const stateClass = active
    ? "text-[#8B5CF6] drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]"
    : "text-[#F1F1F5] hover:text-[#8B5CF6] hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)]";

  return (
    <a href={href} className={`${baseClass} ${stateClass}`}>
      {children}
    </a>
  );
}
