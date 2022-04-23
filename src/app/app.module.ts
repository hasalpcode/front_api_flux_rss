import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FluxComponent } from './components/flux/flux.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UdatefluxComponent } from './udateflux/udateflux.component'
import { FormsModule } from '@angular/forms';

const appRoutes:Routes = [
  {path:'', component:FluxComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    FluxComponent,
    UdatefluxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
