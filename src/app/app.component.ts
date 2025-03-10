import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Palindromo';
  inputText: string = '';
  verifica: boolean = false;

  verificarPalindromo(): void {
    //remove espaços em branco e converte o texto para minúsculas
    const texto = this.inputText.replace(/\s+/g, '').toLowerCase();
    
    //inverte o texto
    const textoInvertido = texto.split('').reverse().join('');
    
    //compara o texto original com o texto invertido
    this.verifica = texto === textoInvertido;
  }
  
}