import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgLibras: any = '../assets/imgs/libras-imagens.png';
  titulo = 'Jogo de Libras';
  descricao = 'Acerta as questões através de vídeos em Libras';
  botao = 'Jogar';

  constructor() { }

  ngOnInit() {
  }

}
