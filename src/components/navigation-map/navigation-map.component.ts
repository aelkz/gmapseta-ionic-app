import { Component, AfterViewInit } from '@angular/core';
import { NavigationMapService } from './navigation-map.service';

@Component({
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  providers: [NavigationMapService]
})
// http://stackoverflow.com/questions/34542143/load-external-css-style-into-angular-2-component
// http://stackoverflow.com/questions/42138068/how-to-add-and-use-custom-js-file-in-angular-2-app-in-typescript-components
// http://stackoverflow.com/questions/34489916/load-external-js-script-dynamically-in-angular-2
export class NavigationMapComponent implements AfterViewInit {
  private navigationMapService: NavigationMapService;

  constructor(navigationMapService: NavigationMapService) {
    this.navigationMapService = navigationMapService;
    this.initializeComponent();
  }

  private initializeComponent(): void {  }

  ngAfterViewInit(): void {  }

}
