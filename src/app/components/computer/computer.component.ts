import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  addingNewComputer: boolean = false
  availableOs: string[] = [
    'Linux',
    'Windows',
    'MacOS'
  ]
  modalComputer: Computer = ({
    id: -1,
    os: '',
    title: '',
    description: '',
    price: 0
  })

  constructor(
    private computerService: ComputerService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getComputers()
  }

  getComputers(): void {
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

  onNewComputerClicked(newComputerModal: any): void {
    this.modalService.open(newComputerModal)
  }

  onModalDismissed(): void {
    this.modalService.dismissAll()
  }

  onModalSavePressed(): void {
    this.modalService.dismissAll()
    this.loading = true

    this.computerService.newComputer(this.modalComputer)
      .subscribe(
        res => this.getComputers(),
        error => {
          alert("Unable to save computer")
          console.log(error)
          this.loading = false
        }
      )
  }
}
