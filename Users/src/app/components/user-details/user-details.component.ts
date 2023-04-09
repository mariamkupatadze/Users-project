import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  firstLetter: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        fetch('https://jsonplaceholder.typicode.com/users/' + params['id'])
        .then(response => response.json())
        .then(json => {
          this.user = json
          this.firstLetter =this.user?.name.charAt(0)
        })
      }
    );
  }
}
