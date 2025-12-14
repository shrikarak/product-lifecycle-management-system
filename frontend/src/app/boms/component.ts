
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-boms',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class BomsComponent implements OnInit {
  boms: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBoms().subscribe(data => {
      this.boms = data;
    });
  }
}
