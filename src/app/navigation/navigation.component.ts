import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
//

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  background = 'primary';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
  }
}
