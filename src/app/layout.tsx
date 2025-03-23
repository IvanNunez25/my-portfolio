import SegmentedControl from "@/components/SegmentedControl";
import "./globals.css";

export default function RootLayout(){
  return (
    <html lang="en">
      <body>
        <div className="mt-5">
          <SegmentedControl />
        </div>
        
      </body>
    </html>
  );
}
