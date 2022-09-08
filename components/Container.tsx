export default function Container({ children }) {
  return (
    <div className="px-8">
      <div className="mx-auto flex max-w-8xl">{children}</div>
    </div>
  );
}
