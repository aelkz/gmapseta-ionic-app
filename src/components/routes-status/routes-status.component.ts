import { Component, OnInit } from '@angular/core';
import { RoutesStatusService } from './routes-status.service';
import { Status } from './../status.model';

@Component({
  selector: 'app-best-route',
  templateUrl: 'routes-status.component.html',
  providers: [RoutesStatusService]
})
export class BestRouteComponent implements OnInit {
  public status: Status;
  public statusList: Status[] = [];
  public errorMessage: string = '';
  public isLoading: boolean = true;

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

 }
