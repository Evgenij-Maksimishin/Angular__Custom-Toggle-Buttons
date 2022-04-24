import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-buttons',
  templateUrl: './toggle-buttons.component.html',
  styleUrls: ['./toggle-buttons.component.scss']
})
export class ToggleButtonsComponent implements OnInit {

  public toggleBtnData = [
    {
      title: 'First',
      selected: true
    },
    {
      title: 'Second',
      selected: false
    },
    {
      title: 'Third',
      selected: false
    }
  ];

  public isShowBntContent: string = 'First';

  ngOnInit(): void { }


  public isSelectBtnToggleDate(i: number): void {
    this.toggleBtnData.forEach(el => {
      el.selected = false;
      //console.log(el);
      //console.log(el.selected);
    });
    this.toggleBtnData[i].selected = true;
    //console.log(this.toggleBtnData[i].selected);
  }

  public showBntContent(type: string): void {
    this.isShowBntContent = type;
  }

}
