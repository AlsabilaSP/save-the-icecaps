import { Injectable } from '@angular/core';
import { DonationForm } from '../interface/donation-form';

@Injectable({
  providedIn: 'root'
})

export class DonationFormService {

  private donationForm?: DonationForm;

  constructor() { }
}
