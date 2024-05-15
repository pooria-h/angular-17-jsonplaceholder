import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { inject, computed } from '@angular/core';
import { Post } from '../interfaces/Post';
import { PostsService } from '../services/PostsService';

const initialState = {
  activePost: 0 as number,
  posts: [] as Post[],
  isFetched: false,
  error: '' as string
};

export const PostsStore = signalStore(
  withState(initialState),
  withComputed(({ error }) => ({
    hasErrors: computed(() => {
      return error().length > 0;
    }),
  })),
  withMethods((
    store,
    postsService = inject(PostsService)) => ({
    setActivePost: (postId: number): void => {
      patchState(store, {
        activePost: postId
      });
    },
    setPostsOnSuccess: (payload: any): void => {
      patchState(store, {
        posts: payload,
        isFetched: true
      });
    },
    setPostsOnFailure: (error: string): void => {
      if (error.length === 0) {
        throw new Error('Error message cannot be empty');
      }
      patchState(store, {
        error,
        isFetched: true,
      });
    },
    async fetchPosts(): Promise<void> {
      const response = await postsService.getPosts();
      if (response.success) {
        this.setPostsOnSuccess(response.data);
      } else {
        this.setPostsOnFailure(response.error || `An error occurred`);
      }
    }
  }))
);
