import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-problems-table-paginator',
  templateUrl: './problems-table-paginator.component.html',
})
export class ProblemsTablePaginatorComponent {
  @Input() size!: number;
  @Output() changeSize = new EventEmitter<number>();
  @Input() page!: number;
  @Output() changePage = new EventEmitter<number>();
  @Input() totalPages!: number;

  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeSizeCount(newSize: number) {
    this.size = newSize;
    this.changeSize.emit(this.size);
    this.isDropdownOpen = false;
  }

  changePageCount(newPage: number) {
    this.page =
      newPage <= 0 ? 1 : newPage > this.totalPages ? this.totalPages : newPage;
    this.changePage.emit(this.page);
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
