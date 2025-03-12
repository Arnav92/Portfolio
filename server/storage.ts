import { type Project, type InsertProject, type Contact, type InsertContact } from "@shared/schema";
import { users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  // Project methods
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;

  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private users: Map<number, User>;
  private projectId: number;
  private contactId: number;
  currentId: number;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.users = new Map();
    this.projectId = 1;
    this.contactId = 1;
    this.currentId = 1;

    // Add some sample projects
    const sampleProjects: InsertProject[] = [
      {
        title: "Java Game Engine",
        description: "A 2D game engine built from scratch in Java using OpenGL",
        technologies: ["Java", "OpenGL", "JUnit"],
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        projectUrl: "https://example.com/game-engine",
        githubUrl: "https://github.com/example/game-engine"
      },
      {
        title: "Machine Learning Chatbot",
        description: "An AI-powered chatbot using Python and OpenAI's GPT",
        technologies: ["Python", "TensorFlow", "OpenAI"],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        projectUrl: "https://example.com/chatbot",
        githubUrl: "https://github.com/example/chatbot"
      },
      {
        title: "Unity 3D Platformer",
        description: "A beautiful 3D platformer game made with Unity",
        technologies: ["Unity", "C#", "Blender"],
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
        projectUrl: "https://example.com/platformer",
        githubUrl: "https://github.com/example/platformer"
      }
    ];

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

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();