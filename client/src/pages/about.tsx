import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-muted-foreground">
              I am a passionate software engineer with experience in full-stack development,
              game development, and data science. My journey in programming started with Java
              and has since expanded to include various modern technologies and frameworks.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Java & Python Development</li>
              <li>• Web Development (React, HTML, CSS)</li>
              <li>• Game Development (Unity)</li>
              <li>• Data Analysis (R, Python)</li>
              <li>• Machine Learning & LLMs</li>
              <li>• Database Design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
