import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoLista } from './components/produto-lista/produto-lista';
import { ProdutoCadastro } from './components/produto-cadastro/produto-cadastro';

const routes: Routes = [
  { path: '', component: ProdutoLista },
  { path: 'cadastro', component: ProdutoCadastro }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
