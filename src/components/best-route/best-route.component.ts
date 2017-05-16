import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { BestRouteService } from './best-route.service';
import { Info } from './../info.model';

@Component({
  selector: 'app-best-route',
  templateUrl: './best-route.component.html',
  providers: [BestRouteService]
})
export class BestRouteComponent implements OnInit {
  @ViewChild(Content) content: Content;

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

  doRefresh(refresher) {
    console.log('begin async operation', refresher);

    this.info = null;
    let id = 2;

    this.bestRouteService.get(id).finally(
      () => refresher.complete()
    ).subscribe(
      s => this.info = s
    );

  }

}
