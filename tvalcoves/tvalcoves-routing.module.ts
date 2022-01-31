import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvalcovesComponent } from './tvalcoves.component';

const routes: Routes = [{ path: '', component: TvalcovesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvalcovesRoutingModule { }
