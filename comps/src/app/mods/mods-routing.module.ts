import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModesHomeComponent } from './modes-home/modes-home.component';

const routes: Routes = [{ path: '', component: ModesHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
