import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {BestRouteComponent} from "./best-route/best-route.component";

// /--------------------------------------------------\
// | Component Module [components.module.ts]          |
// |--------------------------------------------------|
// | First gadget for this mobile application         |
// \--------------------------------------------------/

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [BestRouteComponent],
  declarations: [BestRouteComponent],
})
export class ComponentsModule { }
