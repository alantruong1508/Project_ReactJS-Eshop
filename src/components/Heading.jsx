export default function Heading({ title, subtile }) {
  return (
    <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
      <h1 className="text-3xl font-bold lg:text-4xl text-neutral-400">
        {title}
      </h1>
      <p className="text-xs text-gray-400">{subtile}</p>
    </div>
  );
}
