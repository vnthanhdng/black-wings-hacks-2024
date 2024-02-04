// src/types/Project.ts
export interface Project {
    _id: string;
    title: string;
    summary: string;
    tech: string[];
    github: string;
    demo?: string;
    images: string[];
    status: string;
    diary: string;
  }
  
export interface ProjectCardProps {
    project: Project;
  }