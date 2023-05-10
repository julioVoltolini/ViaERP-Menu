import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ViaERP-Menu';
  usuario: string = "Júlio Cezar";
  empresa: string = "ELIAS MATERIAIS PARA CONSTRUÇÃO"
}
