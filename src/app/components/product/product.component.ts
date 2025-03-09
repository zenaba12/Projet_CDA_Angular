import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productId: number;

  constructor(private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
