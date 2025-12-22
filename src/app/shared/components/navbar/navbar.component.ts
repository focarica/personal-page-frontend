import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

interface NavItem {
  label: string;
  route: string;
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
})
export class NavBarComponent{

    navItems: NavItem[] = [
        { label: 'Home', route: '/' },
        { label: 'CV', route: '/curriculum' },
        { label: 'Find me', route: '/find-me' },
        { label: 'About', route: '/about' }
    ];
}