import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-products',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}