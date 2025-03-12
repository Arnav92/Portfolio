import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

const technologies = [
  "All",
  "Java",
  "Python",
  "React",
  "Unity",
  "R",
  "HTML/CSS",
];

export default function ProjectGrid() {
  const [selectedTech, setSelectedTech] = useState("All");
  
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filteredProjects = projects?.filter(
    (project) =>
      selectedTech === "All" ||
      project.technologies.includes(selectedTech)
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[400px] bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
