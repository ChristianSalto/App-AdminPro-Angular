import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  public intervalSub: Subscription;

  constructor() {
    // this.returnObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (valor) => console.log('Subs: ', valor),
    //     (err) => console.warn('Error', err),
    //     () => console.info('Obs complete')
    //   );

    this.intervalSub = this.returnInterval().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(100).pipe(
      //take(10),
      map((value) => {
        return value + 1;
      }),
      filter((value) => (value % 2 === 0 ? true : false))
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i == 2) {
          observer.error('Llego al valor de 2');
        }
      }, 1000);
    });
  }
}
