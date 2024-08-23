import {Component} from '@angular/core';
import {AuthService} from "../authentication/auth.service";
import {User} from "../authentication/model/User";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private _isMenuOpen: boolean = false;
  private _currentPageUrl!: string;

  get user(): User | null {
    return this.authService.getUserInfo();
  }

  get menuOpenStatus(): boolean {
    return this._isMenuOpen;
  }

  get currentPage() {
    return this._currentPageUrl;
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._currentPageUrl = event.urlAfterRedirects;
      });
    this._currentPageUrl = this.router.url;
  }

  protected onSwitchPage(pageName: string): void {
    this._currentPageUrl = `/${pageName}`;
    this.router.navigate([`/${pageName}`]);
  }

  protected updateOpenMenuStatus(): void {
    this._isMenuOpen = !this._isMenuOpen;
  }
}
