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
  templateUrl: './custom-select-smooth-popover.component.html',
  styleUrl: './custom-select-smooth-popover.component.scss'
})
export class CustomSelectSmoothPopoverComponent {
  drinks: string [] = drinksList
  selectedDrink: string | null = null;
}
