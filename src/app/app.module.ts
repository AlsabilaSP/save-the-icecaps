import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FormComponent } from './form/form.component';
import { DonationComponent } from './donation/donation.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule } from '@angular/forms';

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
