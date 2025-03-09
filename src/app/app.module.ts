import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module'; 
import { provideHttpClient } from '@angular/common/http'; // ✅ Nouvelle méthode recommandée

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
