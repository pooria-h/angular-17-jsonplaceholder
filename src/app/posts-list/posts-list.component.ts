import { Component, inject } from '@angular/core';
import { PostItemComponent } from '../post-item/post-item.component';
import { PostsStore } from '../../store/PostsStore';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [ PostItemComponent ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})

export class PostsListComponent {
  readonly store = inject(PostsStore);
}
