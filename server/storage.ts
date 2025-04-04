import { type Project, type InsertProject, type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Project methods
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private projectId: number;
  private contactId: number;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.projectId = 1;
    this.contactId = 1;

    /**
     * Sample Projects Configuration
     *
     * HTML tags can be used in descriptions for formatting:
     * - Links: <a href="url" target="_blank">link text</a>
     * - Emphasis: <strong>bold</strong>, <em>italic</em>
     * - Lists: <ul><li>item</li></ul>
     */
    const sampleProjects: InsertProject[] = [
      {
        title: "LLM & AI Projects",
        description: `Created a market-slogan and study guide generator.
<br/><br/>
<strong>Projects:</strong>
<p style="margin-bottom: 5px"><ul>
  <li>Developed a custom <a href="https://github.com/Arnav92/RNN-Marketing" target="_blank">LSTM-based RNN for marketing slogan
generation</a>, achieving a 30% increase in engagement over standard
templates. Optimized with top-k sampling to improve creativity while
maintaining brand consistency.</li>
<li>Created a <a href="https://github.com/Arnav92/GPT-Study-Generation" target="_blank">personalized study guide generation tool</a> for university
courses using a <em>pre-trained GPT-2 model</em>.</li>
</ul></p>

Both projects can be downloaded and run for the same purposes.`,
        technologies: ["Python", "OpenAI", "Neural Networks"],
        imageUrl: "/images/llmandai.webp"
      },



      {
        title: "Bomberman-inspired Java Game",
        description: `For a university project, me and my partner, <a href="https://www.linkedin.com/in/jaskiratsinghgill/" target="_blank">Jaskirat Singh Gill</a>,
        made a game inspired by the classic <a href="https://www.youtube.com/watch?v=DoFUpG1Ijk0" target="_blank">Bomberman</a>. 
        <br/><br/>
<strong>Key Components:</strong>
<ul>
  <li>Map loading from a file with a pre-defined matching criterion</li>
  <li>Random map picker</li>
  <li>Hybrid enemy pathfinding algorithm, including the A* algorithm</li>
  <li><em>Infinite world generator</em>, which creates an infinite set of levels with increasing difficulty and size.</li>
</ul>`,
        technologies: ["Java", "libGDX", "A*"],
        imageUrl: "/images/bomb_go_boom.png",
        githubUrl: "https://github.com/Arnav92/bomb-go-boom"
      },



      {
        title: "HTML, CSS, Javascript",
        description: `I have made many websites using this web trinity. Some examples are provided in the list below
        <br/><br/>
<strong>Websites:</strong>
<p style="margin-bottom: 5px"><ul>
  <li>A simple, clean, and aesthetic <a href="http://forests.solutions/pricing-card-frontend-mentor-challenge/" target="_blank">pricing card</a> that can be used when signing up users.</li>
  <li>A <a href="http://forests.solutions/Holy-Grail-Layout/" target="_blank">"Holy Grail" layout</a> that can be used as a general purpose template for creating a website, like a blog.</li>
</ul></p>

As I am writing this, I have recently begun learning and using more modern technologies to create websites to make myself a more complete full stack developer.
For example, the website you are currently using was made by me using React, Typescript, Node.js, and more.`,
        technologies: ["HTML", "CSS", "Javascript", "React", "Typescript", "Node.js", "Intellij", "Visual Studio Code"],
        imageUrl: "/images/trinity.webp"
      },



      {
        title: "Unity Games",
        description: `I've explored game development by creating various games in Unity. 
Below is a sample of these projects, along with an image from "Garcade"—a collection where I made all the listed games playable.
        <br/><br/>
<strong><a href="https://itch.io/search?q=ArnavMakesGames" target="_blank">Games</a>:</strong>
<ul>
  <li>A short, beautiful platformer of a cute fox that can wall-jump.</li>
  <li>A goofy game called "Slime Bouncer", where you can throw a slime around that must avoid obstacles and touch a flag to win.</li>
  <li>A flappy bird replica with some adjusted variables through play testing to make a unique experience.</li>
  <li>A fast-paced obstacle avoiding game called "Cubetastic".</li>
</ul>`,
        technologies: ["Unity", "C#"],
        imageUrl: "/images/garcade_3.png",
        projectUrl: "https://drive.google.com/file/d/1D1SxhpOuIbKgnbQpTiUOiT91bfFa7Emr/view"
      },


      {
        title: "E-Commerce Application",
        description: `For a real-world client project, I developed an Android e-commerce application using Android Studio for my uncle’s local pharmacy. The goal was to regain sales lost to large platforms like Amazon, while maintaining control over product distribution and avoiding high fees and delays.
<br/><br/>
<strong>Features:</strong>
<ul>
  <li>Restricted user registration via Firebase Authentication, ensuring only residents of the target village could access the store.</li>
  <li>Admin access for the pharmacy owner to upload products (image, title, description, price) to Firebase Realtime Database and Firebase Storage.</li>
  <li>Automatic email notifications to the owner after each purchase, including product details, buyer info, and time of order.</li>
  <li>Collaborative filtering-based product recommendations, encouraging relevant product discovery.</li>
  <li>Linear search functionality for quickly finding products by title, description, or price.</li>
</ul>
`,
        technologies: ["Android Studio", "Java", "Firebase (Realtime Database, Storage, Authentication)"],
        githubUrl: "https://github.com/Arnav92/E-Commerce"
      },



      {
        title: "IDSST R Projects",
        description: `For university, I had a class called "Introduction to Data Science and Statistical Thinking" (IDSST),
where I used R to tackle real-world applications of data science, teaching me linear and logistic regression, inference, and more.
        <br/><br/>
<strong>Projects:</strong>
<ul>
  <li>Forecasted profits for a bike-renting business, explaining 82% of the
variability in rentals.</li>
  <li>Identified factors influencing low birth weight with 95%+ confidence, 
  including maternal smoking, while analyzing potential effects of age, race, and other variables.
</li>
  <li>Analyzed a sample dataset to model LEGO profits and identify key consumer demographics. 
  Through statistical analysis and data modeling, determined that the 36-50 age group spends the most on LEGO products.</li>
</ul>`,
        technologies: ["R", "Markdown Documents"],
        githubUrl: "https://github.com/Arnav92/R"
      },



      {
        title: "Java Projects",
        description: `I've been passionate about programming since elementary school, inspired by my father, a programmer. 
Though he initially discouraged me, I finally started coding in 8th grade when a laptop became mandatory for school. 
I began with Java in Notepad, later transitioning to Eclipse, where I built numerous projects (some listed below).
<br/><br/>
Teaching myself to code was challenging but deeply rewarding, strengthening my resilience and passion for programming. 
Years later, I honed my skills further through my university's "Introduction to Programming" (ITP) course, mastering Java fundamentals.
        <br/><br/>
<strong>Projects:</strong>
<ul>
  <li>A WhatsApp-inspired messanger system.</li>
  <li>A local multiplayer fast-paced snake game.</li>
  <li>A program that can create very basic animations.</li>
</ul>`,
        technologies: ["Java", "Command Prompt", "Eclipse", "Intellij"],
        githubUrl: "https://github.com/Arnav92/java-projects"
      },


      {
        title: "Additional Skills",
        description: `
While I've highlighted some of my key projects, I've also worked on numerous smaller projects across various technologies. 
These projects have strengthened my problem-solving skills and expanded my expertise in multiple areas.  
<br/><br/>
Beyond the projects listed, my skills include (but are not limited to):  
<ul>
  <li><strong>Python & Django:</strong> Assisted in developing a website for TUFast Eco.</li>
  <li><strong>SQL:</strong> Experience in database management and querying. Learned during my "Introduction into Computer Science" course in university.</li>
  <li><strong>Git & GitHub:</strong> Proficient in version control and collaborative development.</li>
  <li><strong>C# & Micropython:</strong> Used Micropython to create a smoothly transitioning light for an internship.</li>
  <li><strong>Mathematics:</strong> Studied Mathematics in Natural and Economic Science 1 & 2 at university.</li>
</ul>
Even though these projects are smaller in scale, they have played a crucial role in shaping my technical proficiency.
`,
        technologies: ["Python", "SQL", "Git & Github", "C#", "Django", "Micropython"]
      },
    ];

    // Initialize projects
    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const newProject: Project = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const newContact: Contact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();