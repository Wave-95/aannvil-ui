export default function Container({ children }) {
  return (
    <div className="px-6">
      <div className="mx-auto flex max-w-[1440px]">{children}</div>
    </div>
  );
}
