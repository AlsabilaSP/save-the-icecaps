import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationForm } from 'src/app/interface/donation-form';
import { DonationFormService } from 'src/app/service/donation-form.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  stepNumber = 2;
  stepTitle = 'Your Donation';
  stepPercent = '50%';

  amount = 0;
  isMonthly = true;

  constructor(private srv: DonationFormService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.srv.getDonationForm().toPromise().then(res => {
      if(res.recipientName != '') {
        this.amount = res.donationAmount;
        this.isMonthly = res.isMonthly;
      } else this.router.navigateByUrl('');
    })
  }

  onChange() {
    this.isMonthly = !this.isMonthly;
  }

  currencyInputChanged(value: any) {
    var num = value.replace(/[€,]/g, "");
    return Number(num);
  }
  
  toNext() {
    if(this.amount < 10) {
      alert('Your donation should be larger than €10');
    } else {
      this.srv.setDonationAmount(this.amount);
      this.srv.setMonthly(this.isMonthly);
      this.router.navigate(['form/conditions']);
    }
  }

  toPrev() {
    this.router.navigate(['form']);
  }

}
