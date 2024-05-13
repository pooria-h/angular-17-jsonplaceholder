import { Component, inject } from '@angular/core';
import { PostsStore } from '../../store/PostsStore';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})

export class PostsListComponent {
  readonly store = inject(PostsStore);
}
