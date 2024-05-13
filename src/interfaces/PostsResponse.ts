import { Post } from './Post';

export interface PostsResponse {
    success: boolean;
    data?: Post[];
    error?: string;
}