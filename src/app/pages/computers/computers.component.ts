import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { Computer } from 'src/app/core/models/computer';
import { ComputerService } from 'src/app/core/services/computer.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.scss']
})

export class ComputersComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  computers: Computer[] = [];
  errorFetching: boolean = false;
  addingNewComputer: boolean = false;
  availableOs: string[] = [
    'Linux',
    'Windows',
    'MacOS'
  ];
  modalComputer: Computer = ({
    id: -1,
    os: '',
    title: '',
    description: '',
    price: 0
  });
  computersSub: Subscription = new Subscription();

  constructor(
    private computerService: ComputerService,
  ) {
  }

  ngOnInit(): void {
    this.getComputers();
  }

  getComputers(): void {
    this.computersSub = this.computerService.getComputers()
      .subscribe(
        res => {
          this.computers = res;
          this.loading = false;
        },
        err => {
          console.error("Error fetching computers", err);
          this.errorFetching = true;
          this.loading = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.computersSub.unsubscribe();
  }
}
