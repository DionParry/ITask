import { Component } from '@angular/core';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  dataSource = [] as any;
  constructor(private api:GetApiService) {
    this.api.getData().subscribe(data => {
        console.warn(data);
        this.dataSource = data;
    })
  }

}
