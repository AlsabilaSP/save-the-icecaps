import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationForm } from 'src/app/interface/donation-form';
import { DonationFormService } from 'src/app/service/donation-form.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  stepNumber = 4;
  stepTitle = 'Preview';
  stepPercent = '100%';
  donationForm?: DonationForm;

  constructor(private srv: DonationFormService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.srv.getDonationForm().toPromise().then(res => {
      if(res.recipientName != '') this.donationForm = res;
      else this.router.navigateByUrl('');
    })
  }

  toPrev() {
    this.router.navigate(['form/conditions']);
  }

  onSubmit() {
    alert("Your form has been submitted!");
    this.srv.resetForm();
    this.router.navigate(['']);
  }

}
