import { Injectable, Inject, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSetting {
  constructor(
    @Inject('BASE_URL') public readonly baseUrl: string,
    @Inject(LOCALE_ID) public readonly locale: string) {
  }
}
