import { Component, NgModule, OnInit } from '@angular/core';
import { OSEnum } from 'src/app/enums/OSEnum';
import { Computer } from 'src/app/interfaces/computer';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})

export class ComputerComponent implements OnInit {
  computers: Computer[] = [
    {
      id: 1,
      os: OSEnum.LINUX,
      title: "Teste",
      description: "Description",
      price: 9999
    },
    {
      id: 2,
      os: OSEnum.LINUX,
      title: "Teste",
      description: "Description",
      price: 9999
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
