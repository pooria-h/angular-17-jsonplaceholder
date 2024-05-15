import { Component, inject } from '@angular/core';
import { PostsStore } from '../../store/PostsStore';

@Component({
  selector: 'app-custom-header',
  standalone: true,
  imports: [],
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.css'
})
export class CustomHeaderComponent {
  readonly store = inject(PostsStore);
}
