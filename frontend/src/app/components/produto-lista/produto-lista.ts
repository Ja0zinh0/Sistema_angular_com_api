import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.html',
  styleUrls: ['./produto-lista.css'],
  standalone: false
})
export class ProdutoLista implements OnInit {

  produtos = new MatTableDataSource<Produto>();
  colunas: string[] = ['id', 'nome', 'preco', 'descricao'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos.data = data;
    });
  }
}
