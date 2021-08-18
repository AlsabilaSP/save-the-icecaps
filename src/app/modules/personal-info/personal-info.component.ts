import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationFormService } from 'src/app/service/donation-form.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  stepNumber = 1;
  stepTitle = 'Your Personal Info';
  stepPercent = '25%';
  recipientName = '';
  address = '';
  dateOfBirth = new Date();
  gender = '';
  income = 0;
  
  constructor(private srv: DonationFormService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.srv.getDonationForm().toPromise().then(res => {
      if(res.recipientName != '') {
        this.recipientName = res.recipientName;
        this.address = res.address;
        this.dateOfBirth = res.dateOfBirth;
        this.gender = res.gender;
        this.income = res.income;
      }
    })
  }

  currencyInputChanged(value: any) {
    var num = value.replace(/[€,]/g, "");
    return Number(num);
  }

  toNext() {
    if(this.recipientName == '' || this.address == '') {
      alert("Please fill your name and address");
    } else {
      this.srv.setRecipientName(this.recipientName);
      this.srv.setAddress(this.address);
      this.srv.setDateOfBirth(this.dateOfBirth);
      this.srv.setGender(this.gender);
      this.srv.setIncome(this.income);
      this.router.navigate(['form/donation']);
    }
  }

  toPrev() {
    this.router.navigate(['']);
  }
 
}
