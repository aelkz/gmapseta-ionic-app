import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { BestRouteComponent } from "./best-route/best-route.component";
import { RoutesStatusComponent } from "./routes-status/routes-status.component";
import { NavigationMapComponent } from "./navigation-map/navigation-map.component";

// /--------------------------------------------------\
// | Component Module [components.module.ts]          |
// |--------------------------------------------------|
// | First gadget for this mobile application         |
// \--------------------------------------------------/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [BestRouteComponent, RoutesStatusComponent, NavigationMapComponent],
  declarations: [BestRouteComponent, RoutesStatusComponent, NavigationMapComponent],
})
export class ComponentsModule { }
