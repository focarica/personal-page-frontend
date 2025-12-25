import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';

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

    projects: Project[] = [
      {
        name: 'AutoTorrent',
        description: 'Ferramenta em linha de comando que atua como um agregador de buscas em sites de torrent, permitindo pesquisar, filtrar e obter links diretos para download de forma automatizada.',
        tags: ['automation', 'cli', 'python', 'scraping'],
        repoUrl: 'https://github.com/focarica/AutoTorrent'
      },
      {
        name: 'ICMP Spoof',
        description: 'Script educacional em Python que demonstra ARP poisoning e spoofing de ICMP Echo Replies, simulando ataques básicos de host impersonation e man-in-the-middle em ambientes controlados.',
        tags: ['networks', 'security', 'scapy', 'protocols'],
        repoUrl: 'https://github.com/focarica/ICMP-Spoof'
      },
      {
        name: 'SudokuBot',
        description: 'Bot de automação web que utiliza Selenium para extrair tabuleiros de Sudoku do site sudokutable.com, resolver os puzzles programaticamente e inserir as respostas de volta na interface.',
        tags: ['automation', 'selenium', 'scraping'],
        repoUrl: 'https://github.com/focarica/SudokuBot'
      }
  ];

  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
  }

}