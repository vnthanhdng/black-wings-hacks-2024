import React from 'react';
import { Project, ProjectCardProps } from '@/types/Project';

const ProjectCard : React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition duration-300">
      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
      <p className="mb-3">{project.summary}</p>
      <p className="mb-3">{project.status}</p>
      <div className="mb-3">
        <strong>Technologies:</strong> {project.tech.join(', ')}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          GitHub Repository
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500 hover:text-blue-700 transition duration-300 mt-2"
        >
          Live Demo
        </a>
      )}
      {project.images && project.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${project.title} screenshot ${index + 1}`}
          className="rounded mt-2"
          // Add a specific width or let it be responsive to container's width
          // style={{ width: '100%' }}
        />
      ))}
    </div>
  );
};

export default ProjectCard;
