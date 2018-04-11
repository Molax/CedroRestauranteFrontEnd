import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from "./shared/restaurants.service";
import { Restaurant } from "./shared/restaurant";
import { Pesquisa } from "./shared/pesquisa";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  private restaurants: Restaurant[] = [];
  private pesquisa: Pesquisa[] = [];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getUsers('')
      .subscribe(data => this.restaurants = data);
  }

  deleteRestaurant(restaurant) {
    if (confirm("Você quer mesmo deletar o restaurante " + restaurant.Nome + "?")) {
      var index = this.restaurants.indexOf(restaurant);
      this.restaurants.splice(index, 1);

      this.restaurantsService.deleteUser(restaurant.IdRestaurante)
        .subscribe(null,
        err => {
          alert("Não foi possivel deletar o Restaurante.");
          // Revert the view back to its original state
          this.restaurants.splice(index, 0, restaurant);
        }); 
    }
  }

  buscaUser(nome) {
    if (nome == undefined) {
      nome = '';
    }
    this.restaurantsService.getUsers(nome)
      .subscribe(data => this.restaurants = data);
  }

}
