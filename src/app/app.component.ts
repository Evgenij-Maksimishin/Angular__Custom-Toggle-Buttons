import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isModalPopUpOpen = false;

  ngOnInit(): void {}

  public modalPopUpOpen () {
    this.isModalPopUpOpen = true;
  }

  public closeModalPopUp () {
    this.isModalPopUpOpen = false;
  }
 
}
