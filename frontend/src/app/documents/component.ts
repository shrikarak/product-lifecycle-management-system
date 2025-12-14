
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-documents',
  templateUrl: './component.html',
  styleUrls: ['./component.sass']
})
export class DocumentsComponent implements OnInit {
  documents: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }
}
