import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from "../shared/restaurant";
import { Prato } from '../shared/prato';
import { PratoService } from '../shared/prato.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-prato-form',
  templateUrl: './prato-form.component.html',
  styleUrls: ['./prato-form.component.css']
})
export class PratoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  prato: Prato = new Prato();
  public restaurantes: Restaurant[] = [];

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private pratoService: PratoService,
  ) {
    this.form = formBuilder.group({
      Nome: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      Preco: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      IdRestaurante: ['', [
      ]],
    });
  }

  ngOnInit() {

    this.pratoService.getRestaurants('')
      .subscribe(
      restaurant => this.restaurantes = restaurant,
      response => {
        if (response.status == 404) {
          this.router.navigate(['NotFound']);
        }
      });

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar pratos' : 'Novo prato';

      if (!id)
        return;

      this.pratoService.getUser(id)
        .subscribe(
        prato => this.prato = prato,
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });

    });
  }


  save() {
    debugger;
    console.log(this.restaurantes.length);
    var result,
      pratoValue = this.form.value;

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar prato' : 'Novo prato';

      if (id != undefined) {
        pratoValue.IdPrato = id;
        result = this.pratoService.updateUser(pratoValue);
      }
      else {
        result = this.pratoService.addUser(pratoValue);
      }

    });

    result.subscribe(data => this.router.navigate(['prato']));
  }
}
