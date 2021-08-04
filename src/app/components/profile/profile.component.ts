import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/sources/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   firstName: string;
   lastName: string;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { 
    this.firstName = '';
    this.lastName = '';
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    console.log(id);

    this.firstName = this.profileService.getUser(10);
  }
}
