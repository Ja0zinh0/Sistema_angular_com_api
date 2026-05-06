import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.html',
  styleUrls: ['./produto-cadastro.css'],
  standalone: false
})
export class ProdutoCadastro {

  produto: Produto = {
    nome: '',
    preco: 0,
    descricao: ''
  };

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  cadastrar(): void {
    this.produtoService.cadastrarProduto(this.produto).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
