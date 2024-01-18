import { Component, OnInit, VERSION } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  environment: string = environment.descriptionEnvironment;
  version: string = VERSION.full;
  message: string = "This page was created by <strong>Rogger Paredes</strong>";
  linkedin: string = "https://www.linkedin.com/in/rogger-paredes-8b75b6150/";

  constructor() { }

  ngOnInit(): void {
  }

  openLinkedin() {debugger
    window.open(this.linkedin, '_blank');
  }

}
