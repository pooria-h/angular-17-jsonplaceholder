import {
  Component,
  Input,
  inject,
  computed,
  signal,
  Signal,
  WritableSignal,
  effect
} from '@angular/core';
import { PostsStore } from '../../store/PostsStore';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input({ required: true }) details!: Post;
 
  readonly store = inject(PostsStore);
  readonly isActive: Signal<boolean> = computed(() => this.details.id === this.store.activePost());
  readonly computedTitle: Signal<string | number> = computed(() => this.details[this.activePropertyName()]);
  readonly activePropertyName: WritableSignal<string> = signal('');
  readonly clickCounter: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      if (!this.isActive()) {
        this.handleReset();
      }
    }, { allowSignalWrites: true });
  }

  handleReset(): void {
      this.activePropertyName.set('title');
      this.clickCounter.set(0);
  }

  handleClick(): void {
    this.clickCounter.set(this.clickCounter() + 1);
    this.store.setActivePost(this.details.id);
    this.rotateTitle();
  }

  rotateTitle(): void {
    const keys = Object.keys(this.details);
    let currentIndex = keys.indexOf(this.activePropertyName());

    if (currentIndex === keys.length - 1 || this.clickCounter() === 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    this.activePropertyName.set(keys[currentIndex]);
  }
}
