export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0918] text-white">
      {children}
    </div>
  );
}
