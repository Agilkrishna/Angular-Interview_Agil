import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseNotFoundComponent } from './exerciseNotFound.component';
import { RouterModule } from '@angular/router';
import { Exercise4Component } from '../exercise4/exercise4.component';

@NgModule({
  declarations: [ExerciseNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Exercise4Component,
      },
    ]),
  ],
})
export class ExerciseNotFoundModule {}
