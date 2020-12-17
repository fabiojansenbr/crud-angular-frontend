import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  myForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
    });
  }

  get name() {
    return this.myForm.get("name");
  }

  get price() {
    return this.myForm.get("price");
  }

  createProduct(): void {
    console.log("valor:", this.myForm.value);

    this.productService.create(this.myForm.value).subscribe(() => {
      this.productService.showMessage("Produto criado com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
