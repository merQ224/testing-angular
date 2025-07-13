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
  selector: 'app-dropdown',
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
  templateUrl: '../../component/ionic-dropdown/ionic-dropdown.component.html',
  styleUrls: ['../../component/ionic-dropdown/ionic-dropdown.component.scss']
})
export class IonicDropdownComponent {
  drinks: string [] = drinksList
  selectedDrink: string | null = null;
}
