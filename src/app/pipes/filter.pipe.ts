import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByChar'
})
export class FilterPipe implements PipeTransform {
  transform(users: any[], char: string): any[] {
    if (!char) {
      return users.sort((a, b) => a.name.localeCompare(b.name));
    }
    char = char.toUpperCase();
    const filteredUsers = users.filter(user => user.name.toUpperCase().startsWith(char));
    return filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
  }
}