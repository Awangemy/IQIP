import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkSubject = new BehaviorSubject<boolean>(true); // Default to Dark
  public isDark$: Observable<boolean> = this.isDarkSubject.asObservable();

  constructor() {
    this.loadTheme();
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('iqip-theme');
    if (savedTheme === 'light') {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  public toggleTheme() {
    if (this.isDarkSubject.value) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private setLightTheme() {
    document.body.classList.add('light-theme');
    localStorage.setItem('iqip-theme', 'light');
    this.isDarkSubject.next(false);
  }

  private setDarkTheme() {
    document.body.classList.remove('light-theme');
    localStorage.setItem('iqip-theme', 'dark');
    this.isDarkSubject.next(true);
  }

  public get isDark(): boolean {
    return this.isDarkSubject.value;
  }
}
