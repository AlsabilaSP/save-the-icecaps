import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnInit {

  stepNumber = 3;
  stepTitle = 'Terms and Conditions';

  constructor() { }

  ngOnInit(): void {
  }

}
