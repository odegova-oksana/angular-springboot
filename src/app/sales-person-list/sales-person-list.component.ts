import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "email", 20000),
    new SalesPerson("John", "Doe", "email", 30000),
    new SalesPerson("Emily", "Wong", "email", 12000),
    new SalesPerson("Diana", "Fing", "email", 56000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
