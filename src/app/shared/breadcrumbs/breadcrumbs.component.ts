import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { OperatorFunction, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public tittle: string = '';
  public tittleSubs$: Subscription;

  constructor(private router: Router) {
    this.tittleSubs$ = this.getArgsRoutes().subscribe(({ tittle }) => {
      this.tittle = tittle;
      document.title = `SGC - ${tittle}`;
    });
  }

  ngOnDestroy(): void {
    this.tittleSubs$.unsubscribe();
  }

  getArgsRoutes() {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

}
