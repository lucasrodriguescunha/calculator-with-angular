import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  // @ViewChild('result') resultElement!: ElementRef; permite que você acesse diretamente o elemento HTML no qual você adicionou #result. Isso é mais seguro e idiomático do que usar document.getElementById.
  @ViewChild('result') resultElement!: ElementRef;

  // Adiciona o número ao conteúdo existente no elemento
  insert(num: string): void {
    const resultElement = this.resultElement.nativeElement;
    resultElement.innerHTML += num;
  }

  // Limpa o conteúdo do elemento
  clean(): void {
    this.resultElement.nativeElement.innerHTML = '';
  }

  // Remove o último caractere do conteúdo do elemento
  back(): void {
    const resultElement = this.resultElement.nativeElement;
    const result = resultElement.innerHTML;
    resultElement.innerHTML = result.slice(0, -1);
  }

  // Avalia a expressão matemática no conteúdo do elemento e exibe o resultado
  calculate(): void {
    const resultElement = this.resultElement.nativeElement;
    const result = resultElement.innerHTML;

    if (result) {
      try {
        resultElement.innerHTML = eval(result);
      } catch (error) {
        resultElement.innerHTML = 'Erro';
      }
    } else {
      resultElement.innerHTML = 'Nada';
    }
  }
}
