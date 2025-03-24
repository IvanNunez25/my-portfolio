import TimelineComponent from "@/components/TimelineComponent";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <div>
        <About />
      </div>
      <div id="Experience">
        <TimelineComponent />
      </div>
      
    </div>
  );
}
