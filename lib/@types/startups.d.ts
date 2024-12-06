export interface Startup {
  id: number;
  createdAt: Date;
  views: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: {
    id: number;
    name: string;
    image: string;
  };
}
