import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.less']
})
export class SigupComponent implements OnInit {
sendData: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.sendData = [{name: 'srivardhan',email: 'srivardhan563@gmail.com'}]
  }
  gotoCheckout(){
    const navigationExtras: NavigationExtras = {state: {example: this.sendData}};
    this.router.navigate(['/login'],navigationExtras);
  }

}
