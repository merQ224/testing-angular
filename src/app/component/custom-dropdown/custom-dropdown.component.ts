import {
  Component,
  ElementRef,
  HostListener,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CITIES_LIST } from '../../defn/citiesList';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [IonIcon, IonCardTitle, IonCardHeader, IonCard, CommonModule, FormsModule, ReactiveFormsModule, IonCardContent, IonContent],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDropdownComponent),
    multi: true
  }]
})
export class CustomDropdownComponent implements ControlValueAccessor {
  cities = CITIES_LIST;
  placeholder = 'Select an option';

  isOpen = false;
  selectedId: any = null;
  focusedIndex = 0;
  hoveredIndex: number | null = null;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private readonly elRef: ElementRef) {}

  get selectedLabel(): string {
    const selected = this.cities.find(o => o.id === this.selectedId);
    return selected?.name || this.placeholder;
  }


  writeValue(value: any): void {
    this.selectedId = value;
    this.focusedIndex = this.cities.findIndex(o => o.id === value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(id: any): void {
    this.selectedId = id;
    this.onChange(id);
    this.onTouched();
    this.isOpen = false;
    this.hoveredIndex = null;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen && (event.key === 'Enter' || event.key === ' ')) {
      this.isOpen = true;
      event.preventDefault();
    } else if (this.isOpen) {
      if (event.key === 'ArrowDown') {
        this.focusedIndex = (this.focusedIndex + 1) % this.cities.length;
        event.preventDefault();
      } else if (event.key === 'ArrowUp') {
        this.focusedIndex = (this.focusedIndex - 1 + this.cities.length) % this.cities.length;
        event.preventDefault();
      } else if (event.key === 'Enter') {
        const selected = this.cities[this.focusedIndex];
        this.selectOption(selected.id);
        event.preventDefault();
      } else if (event.key === 'Escape') {
        this.isOpen = false;
        event.preventDefault();
      }
    }
  }

  handleOptionKeyDown(event: KeyboardEvent, i: number): void {
    if (event.key === 'ArrowDown') {
      const next = (i + 1) % this.cities.length;
      this.focusedIndex = next;
      this.focusOption(next);
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      const prev = (i - 1 + this.cities.length) % this.cities.length;
      this.focusedIndex = prev;
      this.focusOption(prev);
      event.preventDefault();
    } else if (event.key === 'Enter' || event.key === ' ') {
      this.selectOption(this.cities[i].id);
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.isOpen = false;
      event.preventDefault();
    }
  }

  private focusOption(index: number): void {
    setTimeout(() => {
      const cityOption = this.elRef.nativeElement.querySelector(`#city-${index}`);
      if (cityOption) {
        cityOption.focus();
      }
    });
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!this.elRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }
}