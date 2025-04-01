import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() dataFromParent!: string;
  @Output() dataToParent = new EventEmitter<string>();

  sendData() {
    this.dataToParent.emit('Hello Parent!');
  }
}
