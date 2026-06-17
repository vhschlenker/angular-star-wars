import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  imports: [],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail {
  private activatedRoute = inject(ActivatedRoute);
  readonly userId: string;

  constructor() {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id')!!;
  }
}
