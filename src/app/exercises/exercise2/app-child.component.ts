import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  Child to Parent:
     <input type="textbox" (ngModelChange)="mychange($event)" [(ngModel)]='masterName'> 
     <br>
     <br>
      <div>{{masterName}}</div>
  `,
})
export class AppChildComponent {
  //getting value from parent to child
  @Input('childToParent')
  masterName!: string;

  //parent component to child component
  @Output() childToParent = new EventEmitter<string>();

  mychange(event: any) {
    console.log(event);
    this.childToParent.emit(event);
  }
}
