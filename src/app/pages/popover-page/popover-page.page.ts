import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-page',
  templateUrl: './popover-page.page.html',
  styleUrls: ['./popover-page.page.scss'],
})
export class PopoverPagePage implements OnInit {

  constructor(private popCtrl : PopoverController) { }

  closePopup() {
    this.popCtrl.dismiss();
  }

  ngOnInit() {
  }

}
