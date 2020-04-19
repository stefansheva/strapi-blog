import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from 'src/services/content.service';
import { PageService } from 'src/services/page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  contents: any = [];
  page: any;
  landingPageId = 1;

  constructor(private pageSvc: PageService) {
  }

  ngOnInit(): void {
    this.pageSvc.getPage(this.landingPageId).subscribe(res => {
      this.page = res;
    });
  }
}
