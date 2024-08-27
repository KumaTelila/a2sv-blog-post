export interface BlogPost {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: {
        _id: string;
        name: string;
        image: string;
        email: string;
        role: string;
    };
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];  
    skills: string[];  
    createdAt: string;  
    updatedAt: string;  
    __v: number;
  }
  