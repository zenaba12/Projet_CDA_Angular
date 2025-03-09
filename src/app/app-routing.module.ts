import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component'; // Vérifie que ce fichier existe

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }, // Page produit avec ID dynamique
  { path: '', redirectTo: '/product/1', pathMatch: 'full' }, // Redirection vers un produit par défaut
  { path: '**', redirectTo: '/product/1' } // Si route inconnue, redirige vers produit 1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
