import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionsComponent } from './modules/conditions/conditions.component';
import { DonationComponent } from './modules/donation/donation.component';
import { FormComponent } from './modules/form/form.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { PersonalInfoComponent } from './modules/personal-info/personal-info.component';
import { PreviewComponent } from './modules/preview/preview.component';

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
      {
        path: 'preview',
        component: PreviewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
