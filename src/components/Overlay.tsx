export default function Overlay() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center text-white opacity-0 screen-content">
        <h1 className="text-5xl font-bold tracking-tight">Michael John</h1>
        <p className="mt-4 text-xl text-white/80">Software Engineer</p>
      </div>
    </div>
  );
}
