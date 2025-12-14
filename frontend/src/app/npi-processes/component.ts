
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-npi-processes',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class NpiProcessesComponent implements OnInit {
  processes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNpiProcesses().subscribe(data => {
      this.processes = data;
    });
  }
}
