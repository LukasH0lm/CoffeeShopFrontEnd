import {Injectable} from '@angular/core';
import {UserModel} from "../../models/User.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private baseUrl = "http://localhost:5196/api";

  constructor(private http: HttpClient) {
  }


  createLogin(customer: UserModel | undefined) {
    return this.http.post(this.baseUrl + "/users/add", customer);
  }

  getUserByEmail(email: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + "/users/email/" + email)
  }

  async checkLoginResponse(email: string, password: string): Promise<boolean> {

    const credentials = {email, password};


    const response = await fetch("http://localhost:5196/api/users/verify-password", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });


    if (response.status >= 400) {

      return false;
    }

    if (response.status === 200) {

      return true;
    }

    return false;
  }


}
