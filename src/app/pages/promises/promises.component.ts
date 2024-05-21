import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then((users) => console.log(users));

    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });
    // promise
    //   .then((msj) => {
    //     console.log(msj);
    //   })
    //   .catch((err) => {
    //     console.log(`Error en mi promesa: ${err}`);
    //   });
    // console.log('Fin del Init');
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((body) => resolve(body.data));
    });
  }
}
