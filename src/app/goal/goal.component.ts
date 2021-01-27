import { Component, OnInit, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'watch finding nemo', 'find an online version and watch merlin find his son', new Date(2022,5,9)),
    new Goal(2, 'buy cookies', 'for the parrot', new Date(2021,4,23)),
    new Goal(3, 'get new phone case', 'i have my birthday coming up soon', new Date(2021,4,10)),
    new Goal(4, 'get dog food', 'pupper likes expensive snacks', new Date(2020,8,15)),
    new Goal(5, 'solve math homework', 'love math', new Date(2021,9,17)),
    new Goal(6, 'plot my world domination plan', 'cause i am an evil overlord', new Date(2021,7,7))
  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.competeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }

  deleteGoal(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index, 1);
      }
    }
  }
  toggleDetails(index: any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
