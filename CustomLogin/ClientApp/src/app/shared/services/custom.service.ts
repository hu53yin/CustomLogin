import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "../models/login";
import { AppSetting } from "./app-setting";

@Injectable({
  providedIn: 'root',
})
export class CustomClient {
  private baseUrl: string;

  constructor(public http: HttpClient, setting: AppSetting) {
    this.baseUrl = setting.baseUrl;
  }

  public login(login: LoginRequest): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/api/login`, login);
  }
}
