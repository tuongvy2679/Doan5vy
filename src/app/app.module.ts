import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import{Routes,RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'chitiet',
    component: ChitietComponent,
  },
  {
    path: 'danhmuc',
    component: DanhmucComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChitietComponent,
    DanhmucComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
