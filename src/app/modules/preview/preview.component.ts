import { Component, OnInit } from '@angular/core';
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
  donationForm?: DonationForm;

  constructor(private srv: DonationFormService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    await this.srv.getDonationForm().toPromise().then(res => {
      this.donationForm = res;
      console.log(this.donationForm)
    })
  }

}
