import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { PersonalInfoComponent } from './modules/personal-info/personal-info.component';
import { ConditionsComponent } from './modules/conditions/conditions.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { FormComponent } from './modules/form/form.component';
import { DonationComponent } from './modules/donation/donation.component';
import { PreviewComponent } from './modules/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PersonalInfoComponent,
    FormComponent,
    DonationComponent,
    ConditionsComponent,
    PreviewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
