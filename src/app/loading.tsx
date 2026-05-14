export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-6">
      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
        <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse [animation-delay:120ms]" />
        <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse [animation-delay:240ms]" />
      </div>
    </div>
  );
}
