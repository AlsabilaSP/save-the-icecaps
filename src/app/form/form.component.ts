import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  toPrev() {
    this.router.navigate(['personal'], {relativeTo: this.route})
  }

  toNext() {
    this.router.navigate(['conditions'], {relativeTo: this.route})
  }

}
