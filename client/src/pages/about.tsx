import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Personal Section */}
      <div className="mb-16 text-center">
        <Avatar className="h-32 w-32 mx-auto mb-6">
          {/* Replace the src with your image URL */}
          <AvatarImage src="/pfp-modified.png" alt="Your Name" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>
        {/* Replace with your name */}
        <h1 className="text-4xl font-bold mb-4">Arnav Kumar</h1>
        {/* Replace with your title/role */}
        <p className="text-xl text-muted-foreground mb-8">
          Full-Stack Developer & Software Engineer
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="text-muted-foreground">
              I am a passionate software engineer with experience in full-stack development,
              game development, data science, and more. My journey in programming started with Java
              in eighth grade and has since expanded to include various modern technologies and frameworks.
              <br/><br/>
              English is my primary language. Having lived in Germany for over 15 years,
              I speak fluent German and hold a Goethe B2 Certificate.
              I was born in India and am fluent in Hindi.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Programming Skills</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Java & Python Development</li>
              <li>• Web Development (React, HTML, CSS)</li>
              <li>• Game Development (Unity, C#)</li>
              <li>• Data Analysis (R)</li>
              <li>• Machine Learning & LLMs</li>
              <li>• Database Manipulation (SQL)</li>
              <li>• Extras: Git & Github, Django, Micropython</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}