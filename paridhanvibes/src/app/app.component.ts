import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './state/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './Models/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paridhanvibes';

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
  
  ) {}

  ngOnInit(): void {
    this.userService.getUserProfile();

    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
    });

    const currentPath = this.activatedRoute.snapshot.routeConfig
    console.log('Current path:', currentPath);

    console.log(this.activatedRoute.toString(),"router ----- ",this.router.routerState.snapshot)
  }


}
