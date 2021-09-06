import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksReport } from 'src/booksReport';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'my-app';
//   dataSource = [] as any;
//   constructor(private api:GetApiService) {
//     this.api.getData().subscribe(data => {
//         console.warn(data);
//         this.dataSource = data;
//     })
//   }


export class AppComponent implements OnInit {
  title = 'my-app';
  ELEMENT_DATA: BooksReport[] = [];
  displayedColumns: string[] = ['id' ,'name', 'price', 'category','author'];
  dataSource = new MatTableDataSource<BooksReport>(this.ELEMENT_DATA)
  constructor(private api:GetApiService) {}

  ngOnInit() {
    this.getAllBooks();
  }

  public getAllBooks() {
    let books = this.api.getData();
    books.subscribe(report=> this.dataSource.data=report as BooksReport[])
  }


}
