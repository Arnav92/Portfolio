import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./project-card";
import type { Project } from "@shared/schema";

export default function ProjectGrid() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects?.map((project, i) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          variant={i % 2 === 0 ? "full" : "minimal"}
        />
      ))}
    </div>
  );
}