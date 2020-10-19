import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() lines: number = 3;
  @Input() header: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
