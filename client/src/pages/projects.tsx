import ProjectGrid from "@/components/projects/project-grid";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ProjectGrid />
    </div>
  );
}
