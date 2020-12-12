import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { LoginService } from '../../services/firebase/login.service';
import {Product} from '../../models/product'

@Component({
  selector: 'app-home',
 templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  products : Product[] = [{
    id: 1,
    imagen: 'assets/img/product/1.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente de 1kg ropa blanca y color',
    price: 3000,
  },
  {
    id: 2,
    imagen: 'assets/img//product/2.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 3,
    imagen: 'assets/img//product/3.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 4,
    imagen: 'assets/img//product/4.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 5,
    imagen: 'assets/img//product/5.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
  {
    id: 6,
    imagen: 'assets/img//product/6.jpg',
    title: 'Detergente OMO',
    categoria : 'Detergente Ropa',
    descripcion: 'Detergente líquido 4.43 L',
    price: 3000,
  },
]
clickProduct(id: number){
  console.log("id es:" + id)

}

  constructor(
    private firestoreService: FirestoreService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.currentUSer().then( resp =>{
      console.log('user logged -->', resp.uid);
    })
    this.firestoreService.getUser('Cw1AZQpZEMMwYY7d1ePFlCY7UDJ3');
  }

  logout(){
    this.loginService.logout().then(resp => {
      console.log('logout ok -->', resp);
    }).catch(error => {
      console.error('error logout -->', error);
    })
  }

}
