import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.scss'],
})
export class TabLabelComponent {

  @Input() label: string | undefined;
  @Input() index: number = -1;
}
