import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  variant?: "full" | "minimal";
}

/**
 * ProjectCard Component
 *
 * This component displays a project card with flexible options:
 *
 * Variants:
 * - full: Shows image, title, description, tech stack, tags, and action buttons (if provided)
 * - minimal: Shows only title, description, tech stack, tags, and action buttons (if provided)
 *
 * Description Formatting:
 * You can use HTML tags in descriptions for formatting, for example:
 * - Links: <a href="url" target="_blank">link text</a>
 * - Text styling: <strong>bold</strong>, <em>italic</em>
 * - Lists: <ul><li>item</li></ul>
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
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              {project.tags?.map((tag) => (
                  <Badge key={tag} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div
                className="text-muted-foreground prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
              ))}
            </div>
          </CardContent>
          {(project.githubUrl || project.projectUrl) && (
              <CardFooter className="gap-2">
                {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                )}
                {project.projectUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Download Online
                      </a>
                    </Button>
                )}
              </CardFooter>
          )}
        </Card>
      </motion.div>
  );
}