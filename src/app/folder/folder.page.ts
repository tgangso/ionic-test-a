import algoliasearch from 'algoliasearch/lite';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public canShowMoreButton = true;
  public results: any;

  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  public test(p1: any, p2: any){
    console.log('test');
  }

  public viewItem(p1: any){
    console.log('view');
  }
}
