import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppChildComponent } from './app-child.component';

@NgModule({
  declarations: [Exercise2Component, AppChildComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [Exercise2Component],
})
export class Exercise2Module {}
