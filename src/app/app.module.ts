import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FormberComponent} from './formber/formber.component'
import { EinkommensteuerFormComponent } from './einkommensteuer-form/einkommensteuer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    FormberComponent,
    EinkommensteuerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
