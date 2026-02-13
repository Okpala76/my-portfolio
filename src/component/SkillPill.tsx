export function SkillPill(props: { label: string }) {
  return (
    <span className="rounded-xl border border-neutral-200 px-3 py-1 text-sm text-neutral-800">
      {props.label}
    </span>
  );
}
