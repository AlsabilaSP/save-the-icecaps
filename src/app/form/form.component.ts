import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  stepNumber = 1;
  stepTitle = 'Your Personal Info';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toPrev() {
    this.router.navigate(['personal'], {relativeTo: this.route})
  }

  toNext() {
    this.router.navigate(['conditions'], {relativeTo: this.route})
  }

  onActivate(event: any) {
    this.stepNumber = event.stepNumber;
    this.stepTitle = event.stepTitle;
  }

}
