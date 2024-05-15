import { Component, OnInit, inject } from '@angular/core';
import { PostsStore } from '../store/PostsStore';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PostsListComponent,
    CustomHeaderComponent
  ],
  providers: [PostsStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  readonly store = inject(PostsStore);

  constructor() { }

  async ngOnInit() {
    await this.store.fetchPosts();
  }
}
