import HeroSection from "@/components/hero-section";
import ProjectGrid from "@/components/projects/project-grid";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <ProjectGrid />
      </div>
    </div>
  );
}
