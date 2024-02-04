// src/firebaseServices.js
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import app from '../lib/firebaseConfig'; // import the Firebase app instance

const db = getFirestore(app);

export const addProject = async (projectData) => {
    try {
      const projectCollectionRef = collection(db, "projects"); // "projects" is the collection name
      const projectFields = {
        title: projectData.title,
        description: projectData.description,
        technologies: projectData.technologies, // Assuming this is an array of strings
        githubUrl: projectData.githubUrl,
        liveDemoUrl: projectData.liveDemoUrl, // Can be null or undefined if not available
        images: projectData.images, // Assuming this is an array of image URLs
        status: projectData.status,
      };
      const docRef = await addDoc(projectCollectionRef, projectFields);
      console.log("Project ID: ", docRef.id);
      return docRef.id; // Return the new project ID
    } catch (e) {
      console.error("Error adding project: ", e);
      throw new Error(e.message); // Rethrow the error to handle it in the calling function
    }
  };

// Function to get all projects
export const getProjects = async () => {
  try {
    const projectsCol = collection(db, "projects");
    const projectSnapshot = await getDocs(projectsCol);
    const projectList = projectSnapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
    return projectList;
  } catch (e) {
    console.error("Error fetching projects: ", e);
    return []; // Return an empty array as fallback
  }
};

export const getEssays = async () => {
    try {
      const essaysCol = collection(db, 'essays'); // Assuming 'essays' is your collection name
      const essaysSnapshot = await getDocs(essaysCol);
      const essays = essaysSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return essays;
    } catch (error) {
      console.error('Error fetching essays:', error);
      throw new Error('Unable to fetch essays');
    }
  };

