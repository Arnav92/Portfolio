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
        title: "Advanced Java Game Engine",
        description: `A sophisticated 2D game engine built from scratch in Java using OpenGL.
Features include:
• Custom physics engine
• Particle system
• Scene management
• Asset loading pipeline`,
        technologies: ["Java", "OpenGL", "JUnit"],
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        projectUrl: "https://example.com/game-engine",
        githubUrl: "https://github.com/example/game-engine"
      },
      {
        title: "LLM-Powered Language Assistant",
        description: `An intelligent language assistant built with Python and OpenAI's GPT.
• Context-aware responses
• Multiple conversation modes
• Custom knowledge integration
• API endpoint integration`,
        technologies: ["Python", "OpenAI", "FastAPI"],
        githubUrl: "https://github.com/example/language-assistant"
      },
      {
        title: "3D Adventure Game",
        description: `An immersive 3D platformer game created with Unity.
Key features:
• Procedurally generated levels
• Advanced character controller
• Dynamic lighting system
• Custom shader effects`,
        technologies: ["Unity", "C#", "Blender"],
        imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
        projectUrl: "https://example.com/unity-game",
        githubUrl: "https://github.com/example/unity-game"
      },
      {
        title: "Data Analysis Framework",
        description: `A comprehensive R-based framework for statistical analysis.
Capabilities:
• Time series analysis
• Statistical modeling
• Data visualization
• Report generation`,
        technologies: ["R", "tidyverse", "ggplot2"],
        githubUrl: "https://github.com/example/r-analysis"
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