import { Component, OnInit, VERSION } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-app',
  templateUrl: './detail-app.component.html',
  styleUrls: ['./detail-app.component.sass']
})
export class DetailAppComponent implements OnInit {

  environment: string = environment.descriptionEnvironment;
  version: string = VERSION.full;

  constructor() { }

  ngOnInit(): void {
  }

}
