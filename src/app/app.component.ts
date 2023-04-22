import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  users = [
    {name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12",},
    {name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7",},
    {name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", },
    {name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1",},
];

  charFilter = '';

  updateCharFilter(char: string): void {
    this.charFilter = char;
  }
}
