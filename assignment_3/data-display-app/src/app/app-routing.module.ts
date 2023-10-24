import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { UserformDisplayComponent } from './userform-display/userform-display.component';
import { TextcomboComponent } from './textcombo/textcombo.component';

const routes: Routes = [
  { path: '', component: DataDisplayComponent },
  { path: 'list', component: ListDisplayComponent },
  { path: 'combo', component: ComboDisplayComponent },
  { path: 'textcombo', component: TextcomboComponent },
  { path: 'user-form', component: UserformDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
