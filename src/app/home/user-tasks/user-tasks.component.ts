import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  tasks: string[] = ['Collect Clients Info', 'Disburse', 'Attend Board Meeting', 'Bring the auditor in', 'Support Collection', 'Include teller in your data', 'Bring the report of survey'];
  constructor() { }

  ngOnInit(): void {
  }

}
