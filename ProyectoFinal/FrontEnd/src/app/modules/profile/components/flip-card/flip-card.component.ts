import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('front', style({
        transform: 'rotateY(0)'
        
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
        
      })),
      transition('front=>back', animate('550ms ease-out')),
      transition('back=>front', animate('550ms ease-in'))
    ]),
  ]

})
export class FlipCardComponent implements OnInit {

  @Input() memb;
  constructor() { }

  ngOnInit(): void {
  }
  flip: string = 'front';

  toggleFlip() {
    this.flip = (this.flip == 'front') ? 'back' : 'front';
  }

}
