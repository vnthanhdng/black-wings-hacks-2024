export interface Essay {
    id: string;
    title: string;
    summary: string;
    date: string; // assuming the date is a string, could be Date object as well
    imageUrl?: string; // optional image URL
    content: string;
  }
  
export interface EssayCardProps {
    essay: Essay;
  }
  