import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userArray : any;
 
  constructor(private router: Router) {} 

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          this.userArray = json
        });
  }

  userDetails(user: any) {
    this.router.navigate(['./user-details'], { queryParams: { id: user.id} });
  }

  deleteUser(user: any) {
    const index = this.userArray.indexOf(user)
    this.userArray.splice(index, 1);
  }
}
