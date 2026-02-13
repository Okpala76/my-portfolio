export function Container(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 md:px-8">
      {props.children}
    </div>
  );
}
