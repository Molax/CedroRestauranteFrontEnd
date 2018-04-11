import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Restaurant } from '../shared/restaurant';
import { RestaurantsService } from '../shared/restaurants.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  restaurant: Restaurant = new Restaurant();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantsService
  ) {
    this.form = formBuilder.group({
      Nome: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {
    
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Restaurante' : 'Novo Restaurante';

      if (!id)
        return;

      this.restaurantService.getUser(id)
        .subscribe(
        restaurant => this.restaurant = restaurant,
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }


  save() {
    var result,
      restaurantValue = this.form.value;

    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Restaurante' : 'Novo Restaurante';
      
      if (id != undefined) {
        restaurantValue.IdRestaurante = id;
        result = this.restaurantService.updateUser(restaurantValue);
      }
      else {
        result = this.restaurantService.addUser(restaurantValue);
      }

    });

    result.subscribe(data => this.router.navigate(['restaurants']));
  }

  goToSearch() {

    this.router.navigate(['restaurants']);
  }
}
