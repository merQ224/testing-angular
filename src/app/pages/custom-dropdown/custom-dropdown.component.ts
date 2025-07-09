import {
  Component,
  Input,
  ElementRef,
  HostListener,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDropdownComponent),
    multi: true
  }]
})
export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() options: { id: any, name: string }[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'Option 6' },
    { id: 7, name: 'Option 7' },
    { id: 8, name: 'Option 8' },
    { id: 9, name: 'Option 9' },
    { id: 10, name: 'Option 10' }
  ];
  @Input() placeholder = 'Select an option';

  isOpen = false;
  selectedId: any = null;
  focusedIndex = 0;
  hoveredIndex: number | null = null;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private readonly elRef: ElementRef) {}

  get selectedLabel(): string {
    const selected = this.options.find(o => o.id === this.selectedId);
    return selected?.name || this.placeholder;
  }


  writeValue(value: any): void {
    this.selectedId = value;
    this.focusedIndex = this.options.findIndex(o => o.id === value);
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
        this.focusedIndex = (this.focusedIndex + 1) % this.options.length;
        event.preventDefault();
      } else if (event.key === 'ArrowUp') {
        this.focusedIndex = (this.focusedIndex - 1 + this.options.length) % this.options.length;
        event.preventDefault();
      } else if (event.key === 'Enter') {
        const selected = this.options[this.focusedIndex];
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
      const next = (i + 1) % this.options.length;
      this.focusedIndex = next;
      this.focusOption(next);
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      const prev = (i - 1 + this.options.length) % this.options.length;
      this.focusedIndex = prev;
      this.focusOption(prev);
      event.preventDefault();
    } else if (event.key === 'Enter' || event.key === ' ') {
      this.selectOption(this.options[i].id);
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.isOpen = false;
      event.preventDefault();
    }
  }

  private focusOption(index: number): void {
    // Focus the option element in the DOM
    setTimeout(() => {
      const option = this.elRef.nativeElement.querySelector(`#option-${index}`);
      if (option) {
        option.focus();
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