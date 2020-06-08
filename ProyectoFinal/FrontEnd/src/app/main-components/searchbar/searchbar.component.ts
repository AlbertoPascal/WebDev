import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ProductSearch = new FormGroup({
    search: new FormControl(''),
  });

  onSearch(){
    let search:string = this.ProductSearch.get('search').value;
    window.location.href = "products/search?s="+search;
  }

}
