import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
//
import { CustomLink } from './custom-link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  background = 'primary';
  links: CustomLink[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    let route: Route;
    for (route of this.router.config) {
      // we only care about the routes that have a data['label']
      // since the others are not going to be rendered in our navigation bar
      let labelData: string | undefined = undefined;
      if (route.data) {
        labelData = route.data['label'];
        if (labelData) {
          const link: CustomLink = {
            path: `/${route.path}`,
            label: labelData,
          };
          this.links.push(link);
        }
      }
    }
    console.log(JSON.stringify(this.links));
  }
}
