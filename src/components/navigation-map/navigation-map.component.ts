import { Component } from '@angular/core';
import { NavigationMapService } from './navigation-map.service';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAZ9yVeau18-qAqqxAidwA_M8ZW1IEgPXQ&signed_in=true&callback=initMap';

@Component({
  selector: 'app-navigation-map',
  templateUrl: './navigation-map.component.html',
  providers: [NavigationMapService]
})
// http://stackoverflow.com/questions/34542143/load-external-css-style-into-angular-2-component
// http://stackoverflow.com/questions/42138068/how-to-add-and-use-custom-js-file-in-angular-2-app-in-typescript-components
// http://stackoverflow.com/questions/34489916/load-external-js-script-dynamically-in-angular-2
export class NavigationMapComponent {
  private navigationMapService: NavigationMapService;
  loadAPI: Promise<any>;

  constructor(navigationMapService: NavigationMapService) {
    this.navigationMapService = navigationMapService;
    this.initializeComponent();
  }

  private initializeComponent(): void {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadAPIScript();
    });
  }

  public loadAPIScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    //document.getElementsByTagName('head')[0].appendChild(node);
  }

}
