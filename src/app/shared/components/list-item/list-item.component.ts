import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'q-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  @Input() item: any;
  @Input() itemHeading!: string;

  @Input() itemUser!: string;

  @Input() subItems?: Array<any>;
  @Input() subItemstTitle?: string;
  @Input() subItemsProperty?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
