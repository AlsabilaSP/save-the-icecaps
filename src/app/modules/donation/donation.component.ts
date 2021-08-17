import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  stepNumber = 2;
  stepTitle = 'Your Donation';

  constructor() { }

  ngOnInit(): void {
  }

}
