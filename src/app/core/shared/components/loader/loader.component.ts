import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.sass'
})

export class LoaderComponent implements OnDestroy {

  constructor(loaderService: LoaderService) {
    this.loading$ = loaderService.show$.subscribe(value => this.loading = value);
  }

  loading$: Subscription;
  loading: boolean = false;

  ngOnDestroy(): void {
    this.loading$.unsubscribe();
  }
  
}
