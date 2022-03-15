import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJuiceComponent } from './list-Juice/list-Juice.component';
import { CreateJuiceComponent } from './create-Juice/create-Juice.component';
import { DisplayJuiceComponent } from './display-Juice/display-Juice.component';
import { EditJuiceComponent } from './edit-Juice/edit-Juice.component';
import { DeleteJuiceComponent } from './delete-Juice/delete-Juice.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListJuiceComponent,
    CreateJuiceComponent,
    DisplayJuiceComponent,
    EditJuiceComponent,
    DeleteJuiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
