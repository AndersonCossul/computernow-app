import { Component, NgModule, OnInit } from '@angular/core';
import { Computer } from 'src/app/interfaces/computer';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})

export class ComputerComponent implements OnInit {
  loading: boolean = true
  computers: Computer[] = []
  errorFetching: boolean = false

  constructor(
    private computerService: ComputerService
  ) { }

  ngOnInit(): void {
    this.computerService.getComputers()
      .subscribe(
        res => {
          this.computers = res
          this.loading = false
        },
        err => {
          console.error("Error fetching computers", err)
          this.errorFetching = true
          this.loading = false
        }
      )
  }

}
