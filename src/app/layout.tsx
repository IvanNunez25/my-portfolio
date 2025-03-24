import SegmentedControl from "@/components/SegmentedControl";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <div className="mt-5">
          <SegmentedControl />
        </div>
        <div className="container mx-auto p-4">
          {children}
        </div>
        
      </body>
    </html>
  );
}
