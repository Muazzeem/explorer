import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileURL = `/api/user/user-info`;
  profileInfo = [];

  constructor(private apiService: ApiService) {
  }

  // tslint:disable-next-line:typedef
  loadProfile() {
    const url = this.profileURL;
    this.apiService.get(url)
      .subscribe((data: any) => {
          this.profileInfo = [data];
          console.warn(this.profileInfo);
        },
        err => {
          console.warn(err);
        },
      );
  }
}
