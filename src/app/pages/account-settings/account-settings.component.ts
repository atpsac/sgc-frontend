import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {

  public linkTheme = document.querySelector('#theme');
  public links: any[] | NodeListOf<Element> = [];
  //public links: any ;


  constructor() {

  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    this.links.forEach((element) => {
      element.classList.remove('working');
      const buttonTheme = element.getAttribute('data-theme');
      const buttonThemeUrl = `./assets/css/colors/${buttonTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (buttonThemeUrl === currentTheme) {
        element.classList.add('working');
      }

    })

  }

}
