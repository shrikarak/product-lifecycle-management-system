
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-engineering-changes',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class EngineeringChangesComponent implements OnInit {
  changes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEngineeringChanges().subscribe(data => {
      this.changes = data;
    });
  }
}
