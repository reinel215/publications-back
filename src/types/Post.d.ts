import { User } from "./User";
export interface Post {
    image?: string;
    message: string;
    likes?: Array<User>;
    author: User;
    create_at: Date;
    location: string;
    status: 'drafted' | 'deleted' | 'published';
}



export type InsertPost = Omit<Post, "create_at" | "likes">