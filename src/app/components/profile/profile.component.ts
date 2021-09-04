import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/sources/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    firstName: string = '';
    lastName: string = '';
    phoneNumber: number = 0;

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { 
  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.profileService.getUser(id).subscribe(data => {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.phoneNumber = data.phoneNumber;
    });
  }
}
