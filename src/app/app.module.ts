import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostService } from './post/post.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    LinhaDoTempoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule { }
