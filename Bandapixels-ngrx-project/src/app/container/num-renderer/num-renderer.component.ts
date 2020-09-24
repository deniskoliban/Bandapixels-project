import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-renderer',
  templateUrl: './num-renderer.component.html',
  styleUrls: ['./num-renderer.component.scss']
})
export class NumRendererComponent implements OnInit {
  @Input() num: number;

  constructor() { }

  ngOnInit() {
  }

}
