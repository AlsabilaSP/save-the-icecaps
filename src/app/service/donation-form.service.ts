import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DonationForm } from '../interface/donation-form';

@Injectable({
  providedIn: 'root'
})

export class DonationFormService {

  private donationForm: DonationForm = {
    recipientName: '',
    address: '',
    dateOfBirth: new Date(),
    gender: '',
    income: 0,
    donationAmount: 0,
    isMonthly: true,
    hasAgreed: false
  }

  resetForm() {
    this.donationForm = {
      recipientName: '',
      address: '',
      dateOfBirth: new Date(),
      gender: '',
      income: 0,
      donationAmount: 0,
      isMonthly: true,
      hasAgreed: false
    }
  }

  getDonationForm(): Observable<DonationForm> {
    return of(this.donationForm);
  }

  setRecipientName(name: string) {
    this.donationForm.recipientName = name;
  }

  setAddress(address: string) {
    this.donationForm.address = address;
  }

  setDateOfBirth(date: Date) {
    this.donationForm.dateOfBirth = date;
  }

  setGender(gender: string) {
    this.donationForm.gender = gender;
  }

  setIncome(income: number) {
    this.donationForm.income = income;
  }

  setDonationAmount(amount: number) {
    this.donationForm.donationAmount = amount;
  }

  setMonthly(bool: boolean) {
    this.donationForm.isMonthly = bool;
  }

  setAgreement(bool: boolean) {
    this.donationForm.hasAgreed = bool;
  }

}
