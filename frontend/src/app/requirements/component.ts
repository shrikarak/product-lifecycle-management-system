
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-requirements',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class RequirementsComponent implements OnInit {
  requirements: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRequirements().subscribe(data => {
      this.requirements = data;
    });
  }
}
