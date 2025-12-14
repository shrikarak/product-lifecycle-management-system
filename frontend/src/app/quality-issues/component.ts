
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-quality-issues',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class QualityIssuesComponent implements OnInit {
  issues: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQualityIssues().subscribe(data => {
      this.issues = data;
    });
  }
}
