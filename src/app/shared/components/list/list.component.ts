import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'q-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
