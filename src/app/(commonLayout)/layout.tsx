import CommonNavbar from "@/components/home-layout/CommonNavbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50">
      <CommonNavbar />
      {children}
    </div>
  );
}
