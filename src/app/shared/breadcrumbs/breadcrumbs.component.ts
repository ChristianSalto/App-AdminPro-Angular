import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title!: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getDataRute().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRute() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) =>
        event.snapshot.data.title ? true : false
      ),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
