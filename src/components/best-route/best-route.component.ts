import { Component, OnInit } from '@angular/core';
import { BestRouteService } from './best-route.service';

@Component({
  selector: 'app-best-route',
  templateUrl: './best-route.component.html',
  providers: [BestRouteService]
})
export class BestRouteComponent {
  private bestRouteService: BestRouteService;

  constructor(bestRouteService: BestRouteService) {
    this.bestRouteService = bestRouteService;
    this.initializeComponent();
  }

  private initializeComponent(): void {
  }

 }
