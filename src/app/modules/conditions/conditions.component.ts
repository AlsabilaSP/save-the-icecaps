import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationFormService } from 'src/app/service/donation-form.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {

  stepNumber = 3;
  stepTitle = 'Terms and Conditions';
  stepPercent = '75%';
  hasAgreed = false;

  constructor(private srv: DonationFormService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.srv.getDonationForm().toPromise().then(res => {
      if(res.recipientName != '') {
        this.hasAgreed = res.hasAgreed;
      } else this.router.navigateByUrl('');
    })
  }

  toNext() {
    this.srv.setAgreement(this.hasAgreed);
    if(this.hasAgreed) this.router.navigate(['form/preview']);
    else {
      alert("Please read the terms and conditions");
    }
  }

  toPrev() {
    this.router.navigate(['form/donation']);
  }

}
