import { Component } from '@angular/core';
import { LogoComponent } from '@widgets/logo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [LogoComponent],
})
export class FooterComponent {}
