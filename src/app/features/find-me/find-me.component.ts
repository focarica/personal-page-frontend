import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { HttpService } from '../../http.service';
import { FIND_ME_ICONS } from '../../shared/icons/find-me/find-me-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


interface FindMeLink {
  label: string;
  url: string;
  hint?: string;
  icon: keyof typeof FIND_ME_ICONS;
}
@Component({
  selector: 'app-find-me-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './find-me.html',
})
export class FindMeComponent implements OnInit{
  
  icons: Record<string, SafeHtml> = {};
  private sanitizer = inject(DomSanitizer);

  links: FindMeLink[] = [
    {
      label: 'GitHub',
      url: 'https://github.com/focarica',
      hint: 'projects, experiments, open source',
      icon: 'github'
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/artvniss',
      hint: 'professional background',
      icon: 'linkedin'
    },
    {
      label: 'Email',
      url: 'mailto:a.vinicius0042@gmail.com',
      hint: 'direct contact',
      icon: 'email'
    },
    {
      label: 'Twitter / X',
      url: 'https://x.com/focarica',
      hint: 'twitter & short thoughts',
      icon: 'twitter'
    },
    {
      label: 'Letterboxd',
      url: 'https://letterboxd.com/Foca1/',
      hint: 'what I’ve been watching lately',
      icon: 'letterboxd'
    },
    {
      label: 'Railway',
      url: 'https://railway.com?referralCode=tIK0Gu',
      hint: '$20 Free Railway Credits',
      icon: 'railway'
    }
  ];



  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    for (const key in FIND_ME_ICONS) {
      this.icons[key] = this.sanitizer.bypassSecurityTrustHtml(
        FIND_ME_ICONS[key]
      );
    }
  }

}
