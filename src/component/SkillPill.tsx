export function SkillPill(props: { label: string }) {
  return (
    <span className="rounded-full border border-[color:var(--color-line)] bg-white/70 px-3 py-1 text-sm font-medium text-[color:var(--color-ink)] shadow-sm">
      {props.label}
    </span>
  );
}
