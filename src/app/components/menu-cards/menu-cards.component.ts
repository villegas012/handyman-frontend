import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  redireccionar(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
