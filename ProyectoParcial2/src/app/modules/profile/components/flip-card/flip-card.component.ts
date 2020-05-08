import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() memb;
  constructor() { }

  ngOnInit(): void {
  }

}
