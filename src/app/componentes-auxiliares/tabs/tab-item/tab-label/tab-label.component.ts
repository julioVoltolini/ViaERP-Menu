import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
})
export class TabLabelComponent implements OnInit {
  @Input()
  label!: string;
  @Input()
  index!: number;

  ngOnInit(): void {
    if (this.label == (null || undefined) || this.label.length == 0) {
      throw new Error('Deve informar o label da tab.');
    } else if (this.index == (null || undefined) || this.index <= 0) {
      throw new Error('Deve informar o index da tab.');
    }
  }
}
