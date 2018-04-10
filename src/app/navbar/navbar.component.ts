import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nome: String = "Jackson Maiaaa";
  logo: String = "../../assets/img/logo.png";


  constructor() { }

  ngOnInit() {
  }

}
