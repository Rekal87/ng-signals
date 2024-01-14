import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-country-capital',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './country-capital.component.html',
  styleUrl: './country-capital.component.css',
})
export class CountryCapitalComponent {
  @Input({ required: true }) data: Record<string, string> = {};
}
