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


export interface PostDb extends Post {
    user_id: number;
    post_id: number;
}

export interface RemovePost {
    author: string;
    post_id: string;
}


export interface UpdatePost {
    message: string;
    status: 'drafted' | 'deleted' | 'published';
    author: string;
    post_id: string;
}


export interface Like {
    userId: string;
    postId: string;
    create_at?: Date;
}

export type InsertPost = Omit<Post, "create_at" | "likes">