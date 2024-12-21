import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pattern-lock',
  templateUrl: './pattern-lock.component.html',
  styleUrl: './pattern-lock.component.scss',
})
export class PatternLockComponent {
  grid: number[] = Array(9).fill(0); 
  selectedCells: number[] = [];
  isDrawing: boolean = false;

  onMouseDown(index: number): void {
    this.isDrawing = true;
    this.selectedCells = [index]; 
  }

  onMouseEnter(index: number): void {
    if (this.isDrawing && !this.selectedCells.includes(index)) {
      this.selectedCells.push(index); 
    }
  }

  onMouseUp(): void {
    if (this.isDrawing) {
      this.isDrawing = false;
      console.log('Pattern:', this.selectedCells);
      this.validatePattern(this.selectedCells);
      this.selectedCells = []; 
    }
  }

  validatePattern(pattern: number[]): void {
    const correctPattern = [0, 1, 2, 4, 8];
    if (JSON.stringify(pattern) === JSON.stringify(correctPattern)) {
      alert('Pattern matched!');
    } else {
      alert('Pattern incorrect!');
    }
  }
}
