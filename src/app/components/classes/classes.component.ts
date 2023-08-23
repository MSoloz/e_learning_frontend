import { Component } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {

  cardsData = [
    { title: 'Réussir ma GS', content: 'Inclut: Compter jusqu à 5|Ranger jusqu à 10 jetons dans des boîtes de 10|Compter de 5 en 5|Moins, plus et égal|Reconnaître des figures planes' },
    { title: 'Réussir mon CP', content: 'Inclut: Ordonner des nombres jusqu à 100|Trouver les additions correspondant à une somme jusqu à 10|Additions à trou jusqu à 10|Le double' },
    { title: 'Réussir mon CE1', content: 'Inclut: Recomposer des nombres jusqu à 99|Décomposer des nombres jusqu à 999|Ordonner des nombres jusqu à 1 000|Additionner des multiples de 100' },
    { title: 'Réussir mon CE2', content: 'Inclut: Décomposer des nombres jusqu à 9 999|Écrire des multiplications pour des groupes égaux|Partager en groupes égaux|Sens de la division : groupement' },
    { title: 'Réussir mon CM1', content: 'Inclut: Arrondir|Représenter des fractions|Placer des fractions sur des droites graduées|Placer et ordonner des fractions sur une droite graduée' },
    { title: 'Réussir mon CM2', content: 'Inclut: Plus grand commun diviseur (PGCD)|Placer des nombres décimaux sur des droites graduées|Multiplier des nombres décimaux à l aide de schémas' }
    
  ];

}
