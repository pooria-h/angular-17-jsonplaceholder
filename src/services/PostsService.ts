import { Injectable } from '@angular/core';
import { PostsResponse } from '../interfaces/PostsResponse';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor() { }

  async getPosts(): Promise<PostsResponse> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        return { success: false, error: response.status.toString() }
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error: any) {
      const typedError: Error = error;
      return { success: false, error: typedError.message }
    }
  }
}
