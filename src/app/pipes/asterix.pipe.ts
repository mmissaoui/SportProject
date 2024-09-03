import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let ch1: string = "";
    let V: any = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < V.length; j++) {
        if (x.toLowerCase() == V[j]) {
          x = "*";
          break;
        }
      }
      ch1 = ch1 + x;
    }
    return (ch1);
  }
  //ch.replace(/aeiouyaeIOUY/,"*");
}
