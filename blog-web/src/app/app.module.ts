import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { PostComponent } from './components/post/post.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PostComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
