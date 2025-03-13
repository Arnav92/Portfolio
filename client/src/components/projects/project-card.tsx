import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  variant?: "full" | "minimal";
}

/**
 * ProjectCard Component
 * 
 * This component displays a project in either a full or minimal variant:
 * - full: Shows an image, title, description, tech stack, and links
 * - minimal: Shows only title, description, tech stack, and links
 * 
 * Example Usage:
 * ```tsx
 * // Full variant with image
 * <ProjectCard 
 *   project={{
 *     title: "My Project",
 *     description: "A detailed description of what the project does...",
 *     technologies: ["React", "Node.js"],
 *     imageUrl: "https://path.to/image.jpg",
 *     githubUrl: "https://github.com/username/repo"
 *   }}
 *   variant="full"
 * />
 * 
 * // Minimal variant without image
 * <ProjectCard 
 *   project={{
 *     title: "Text-Only Project",
 *     description: "This project doesn't need an image...",
 *     technologies: ["Python", "TensorFlow"],
 *     githubUrl: "https://github.com/username/repo"
 *   }}
 *   variant="minimal"
 * />
 * ```
 */
export default function ProjectCard({ project, variant = "full" }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        {variant === "full" && project.imageUrl && (
          <div className="relative h-48 lg:h-64">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        {project.githubUrl && (
          <CardFooter>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}