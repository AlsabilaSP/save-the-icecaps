import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './conditions/conditions.component';
import { DonationComponent } from './donation/donation.component';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'form',
    component: FormComponent,
    children: [
      {
        path: 'personal',
        component: PersonalInfoComponent
      },
      { 
        path: '', 
        redirectTo: 'personal',
        pathMatch: 'full'
      },
      {
        path: 'donation',
        component: DonationComponent
      },
      {
        path: 'conditions',
        component: ConditionsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
