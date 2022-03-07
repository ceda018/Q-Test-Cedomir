import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'q-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() list: Array<any> = [];
  @Input() itemTitleProperty!: string;
  @Input() user!: string;

  @Input() subListArray!: string;
  @Input() subListProperty!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
