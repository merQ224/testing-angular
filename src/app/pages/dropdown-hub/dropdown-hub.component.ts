import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dropdown-hub',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './dropdown-hub.component.html',
  styleUrl: './dropdown-hub.component.scss'
})
export class DropdownHubComponent {

}
