import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJuiceComponent } from './create-Juice/create-Juice.component';
import { DeleteJuiceComponent } from './delete-Juice/delete-Juice.component';
import { DisplayJuiceComponent } from './display-Juice/display-Juice.component';
import { EditJuiceComponent } from './edit-Juice/edit-Juice.component';
import { ListJuiceComponent } from './list-Juice/list-Juice.component';

const routes: Routes = [
  { path: 'create', component: CreateJuiceComponent },
  { path: 'list-juice', component: ListJuiceComponent },
  { path: 'display/:id', component: DisplayJuiceComponent },
  { path: 'edit/:name/:id', component: EditJuiceComponent },
  { path: 'delete/:name/:id', component: DeleteJuiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
