import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCapitalComponent } from '../country-capital/country-capital.component';

@Component({
  selector: 'app-declarative',
  standalone: true,
  imports: [CommonModule, CountryCapitalComponent],
  templateUrl: './declarative.component.html',
  styleUrl: './declarative.component.css',
})
export class DeclarativeComponent {
  protected data = {
    Germany: 'Berlin',
    Norway: 'Oslo',
  };
}
