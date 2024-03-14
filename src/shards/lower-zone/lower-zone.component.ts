import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lower-zone',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lower-zone.component.html',
  styleUrl: './lower-zone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LowerZoneComponent { }
