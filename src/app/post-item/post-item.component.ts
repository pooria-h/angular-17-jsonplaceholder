import {
  Component,
  Input,
  inject,
  computed,
  signal,
  Signal,
  WritableSignal,
  SimpleChanges,
  OnChanges,
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
export class PostItemComponent implements OnChanges {
  @Input({ required: true }) activePost!: number;
  @Input({ required: true }) details!: Post;
  @Input({ required: true }) title!: string;
 
  readonly store = inject(PostsStore);
  readonly isActive: Signal<boolean> = computed(() => this.details.id === this.store.activePost());
  readonly computedTitle: Signal<string | number> = computed(() => this.details[this.activePropertyName()]);
  readonly activePropertyName: WritableSignal<string> = signal('title');

  handleReset() {
    if (!this.isActive()) {
      this.activePropertyName.set('title');
    }
  }

  handleClick() {
    this.store.setActivePost(this.details.id);
    this.rotateTitle();
  }

  rotateTitle() {
    const keys = Object.keys(this.details);
    let currentIndex = keys.indexOf(this.activePropertyName());

    if (currentIndex === keys.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    this.activePropertyName.set(keys[currentIndex]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activePost'] && !changes['activePost'].isFirstChange()) {
      this.handleReset();
    }
  }
}
