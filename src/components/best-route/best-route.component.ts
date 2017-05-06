import { Component, OnInit } from '@angular/core';
import { BestRouteService } from './best-route.service';
import { Info } from './../info.model';

@Component({
  selector: 'app-best-route',
  templateUrl: './best-route.component.html',
  providers: [BestRouteService]
})
export class BestRouteComponent implements OnInit {
  info: Info;
  private bestRouteService: BestRouteService;

  constructor(bestRouteService: BestRouteService) {
    this.bestRouteService = bestRouteService;
    this.initializeComponent();
  }

  ngOnInit(){
    //let id = Number.parseInt(params['id']);
    let id = 2;
    this.bestRouteService.get(id).subscribe(s => this.info = s);
  }

  private initializeComponent(): void {}

 }
