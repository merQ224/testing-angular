import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';
import { drinksList } from '../../defn/drinkList';

@Component({
  selector: 'app-custom-select-smooth-popover',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon
  ],
  templateUrl: '../../component/ionic-dropdown-custom/ionic-dropdown-custom.component.html',
  styleUrl: '../../component/ionic-dropdown-custom/ionic-dropdown-custom.component.scss'
})
export class IonicDropdownCustomComponent {
  drinks: string [] = drinksList
  selectedDrink: string | null = null;
}
