import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { RoutesStatusService } from './routes-status.service';
import { Status } from './../status.model';

@Component({
  selector: 'app-routes-status',
  templateUrl: 'routes-status.component.html',
  providers: [RoutesStatusService]
})
export class RoutesStatusComponent implements OnInit {
  @ViewChild(Content) content: Content;

  public status: Status;
  public statusList: Status[] = [];
  public errorMessage: string = '';
  public isLoading: boolean = true;

  public routeName:string = "";
  public routeID:number = 0;
  public routeKilometers:number = 0;

  private routesStatusService: RoutesStatusService;

  constructor(routesStatusService: RoutesStatusService) {
    this.routesStatusService = routesStatusService;
    this.initializeComponent();
  }

  ngOnInit(){
    //let id = Number.parseInt(params['id']);
    let id = 2;
    this.routesStatusService.getAll(id).subscribe(
        /* happy path */ p => this.statusList = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.doComplete()
    );
  }

  public doComplete() {
    this.isLoading = false;
    // get the selected route
    this.status = this.statusList.find(e => e.selected);
  }

  private initializeComponent(): void {}

  public showRouteInfo(status: Status) {
    if (this.routeID == status.id) {
      this.routeName = "";
      this.routeID = 0;
      this.routeKilometers = 0;
    }else {
      this.routeName = status.name;
      this.routeID = status.id;
      this.routeKilometers = status.kilometers;
    }
  }

  doRefresh(refresher) {
    console.log('begin async operation', refresher);

    this.status = null;
    let id = 2;

    this.routesStatusService.getAll(id).finally(
      () => refresher.complete()
    ).subscribe(
      /* happy path */ p => this.statusList = p,
      /* error path */ e => this.errorMessage = e,
      /* onComplete */ () => this.doComplete()
    );

  }

}
