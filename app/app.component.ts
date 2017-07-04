import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
       <h1>Rate a Goat</h1>
       <h3>{{currentFocus}}</h3>
       <ul>
        <li [class]="priorityColor(currentGoat)" (click)="isDone(currentGoat)" *ngFor="let currentGoat of goats">{{currentGoat.description}}
        <br>
        <img src='{{currentGoat.image}}' style="width: 25%"/>
        <button (click)="editGoat(currentGoat)" class="btn btn-success">Rank!</button></li>
      </ul>
      <hr>
      <div>
       <h3>You selected: {{selectedGoat.description}}</h3>
      <h3>Edit Goat</h3>
      <label>Enter Goat Description:</label>
      <input [(ngModel)]="selectedGoat.description">
       <label>Enter Cuteness Ranking (1-3):</label>
       <br>
       <input type="radio" [(ngModel)]="selectedGoat.priority" [value]="1"> 1 (Cute)<br>
       <input type="radio" [(ngModel)]="selectedGoat.priority" [value]="2"> 2 (Aww, sweet bb goat!)<br>
       <input type="radio" [(ngModel)]="selectedGoat.priority" [value]="3" style="margin-bottom: 10%"> 3 (OMG I LOVE THIS BB MORE THAN ANYTHING 😭🐐)
      </div>
    </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Rank the goats by cuteness';
  goats: Goat[] = [
    new Goat('Sassy goat :)', 3, 'https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/goats-smart-885.jpg?itok=vyKaFfPY'),
    new Goat('Wheelchair goat', 2, 'http://i.dailymail.co.uk/i/pix/2014/05/22/article-2635754-1E1870DD00000578-376_634x388.jpg'),
    new Goat('Jumpy goat', 1, 'https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/goats-opener.jpg?itok=23NgevSU')];
  selectedGoat: Goat = this.goats[0];

  editGoat(clickedGoat) {
    this.selectedGoat = clickedGoat;
  }

  isDone(clickedGoat: Goat) {
    if(clickedGoat.done === true) {
      console.log("This goat is so cute!");
    }
  }

  priorityColor(currentGoat){
    if (currentGoat.priority === 3){
      return "bg-danger";
    } else if (currentGoat.priority === 2) {
      return  "bg-success";
    } else {
      return "bg-info";
    }
  }
}

export class Goat {
  public done: boolean = false;
  constructor(
    public description: string,
    public priority: number,
    public image: string
  ) { }
}
