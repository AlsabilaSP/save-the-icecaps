import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stepNumber = 1;
  stepTitle = 'Your Personal Info';

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(event: any) {
    this.stepNumber = event.stepNumber;
    this.stepTitle = event.stepTitle;
  }

}
