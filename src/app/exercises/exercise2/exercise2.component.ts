import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css'],
})
export class Exercise2Component {
  master: string = 'Agil Krishna';

  //Getting value from child
  childToParent(name: string) {
    this.master = name;
  }
}
