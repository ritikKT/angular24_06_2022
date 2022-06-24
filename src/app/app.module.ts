import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { test } from './test.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent, 
    test
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
