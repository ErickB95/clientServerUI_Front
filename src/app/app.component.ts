import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public entries: string[] = [];
  title = 'clientServerUI';

  constructor(private appSer: AppService) { }

  ngOnInit(): void {
  }

  public getEntries(){
    this.appSer.completeRequests().subscribe(data => {
      this.entries = data;
    });
    console.log(this.entries);
  }
}
