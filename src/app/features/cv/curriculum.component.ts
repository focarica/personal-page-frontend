import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { SeoService } from '../../shared/services/seo.service';

export interface Project {
  name: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-curriculum-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './curriculum.html',
})
export class CurriculumPageComponent implements OnInit{

    private seo = inject(SeoService)

    projects: Project[] = [
      {
        name: 'AutoTorrent',
        description: 'A command-line tool that acts as a search aggregator for torrent sites, allowing you to search, filter, and obtain direct download links in an automated way.',
        tags: ['automation', 'cli', 'python', 'scraping'],
        repoUrl: 'https://github.com/focarica/AutoTorrent'
      },
      {
        name: 'ICMP Spoof',
        description: 'Script in Python that demonstrates ARP poisoning and spoofing of ICMP Echo Replies, simulating basic host impersonation and man-in-the-middle attacks in controlled environments.',
        tags: ['networks', 'security', 'scapy', 'protocols'],
        repoUrl: 'https://github.com/focarica/ICMP-Spoof'
      },
      {
        name: 'SudokuBot',
        description: 'Web automation bot that uses Selenium to extract Sudoku boards from the sudokutable.com website, solve the puzzles programmatically, and insert the answers back into the interface.',
        tags: ['automation', 'selenium', 'scraping'],
        repoUrl: 'https://github.com/focarica/SudokuBot'
      }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.seo.setPage('CV — Artur Sousa', 'Projects, code, and technical background.', '/curriculum');
  }

}