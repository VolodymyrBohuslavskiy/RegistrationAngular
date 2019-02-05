import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/showall');
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:8080/delete' + id).subscribe();
  }

  saveUser(user: string) {
    return this.http.post('http://localhost:8080/add', user).subscribe();
  }

}
