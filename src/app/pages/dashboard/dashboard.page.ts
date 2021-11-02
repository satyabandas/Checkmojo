import { Component } from '@angular/core';

import { ModalController, PopoverController } from '@ionic/angular';

import { CompleteModalPage } from '../complete-modal/complete-modal.page';
import {PopoverPagePage} from '../popover-page/popover-page.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage  {

  constructor(private modalCtrl : ModalController, private popCtrl : PopoverController) { }

  async complete(item:any){ 
    const modal = await this.modalCtrl.create({
      component: CompleteModalPage
    });
    //item:IonItemSliding;
    //item.close();

    await modal.present();
  }

  async reschedule(ev:any){
    const popover = await this.popCtrl.create({
      component: PopoverPagePage,
      event: ev,
      translucent: true
    })

    await popover.present();
  }

}
