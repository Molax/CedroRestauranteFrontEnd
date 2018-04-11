import { Component, OnInit } from '@angular/core';
import { PratoService } from "./shared/prato.service";

import { Prato } from "./shared/prato";
import { Pesquisa } from "./shared/pesquisa";

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class pratoComponent implements OnInit {


  private prato: Prato[] = [];
  private pesquisa: Pesquisa[] = [];

  constructor(private pratoService: PratoService) { }


  ngOnInit() {
    this.pratoService.getUsers('')
      .subscribe(data => this.prato = data);
  }

  deleteprato(prato) {
    if (confirm("Você quer mesmo deletar o pratos " + prato.Nome + "?")) {
      var index = this.prato.indexOf(prato);
      this.prato.splice(index, 1);

      this.pratoService.deleteUser(prato.IdPrato)
        .subscribe(null,
        err => {
          alert("Não foi possivel deletar o pratoe.");
          // Revert the view back to its original state
          this.prato.splice(index, 0, prato);
        });
    }
  }

  buscaUser(nome) {
    debugger;
    if (nome == undefined) {
      nome = '';
    }
    this.pratoService.getUsers(nome)
      .subscribe(data => this.prato = data);
  }

}
