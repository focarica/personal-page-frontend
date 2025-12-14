import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'CV', route: '/cv' },
    { label: 'Find me', route: '/find-me' },
    { label: 'About', route: '/about' }
  ];

  mockedPosts: Post[] = [
  {
    id: 'git-driven-blogs',
    title: 'Git-driven blogs: escrevendo sem CMS',
    description: 'Uma abordagem simples para manter um blog sem banco de dados, usando Git como fonte da verdade.',
    date: '2025-01-12',
    tags: ['infra', 'blog', 'git'],
  },
  {
    id: 'nginx-ec2-notes',
    title: 'Notas práticas sobre Nginx em EC2',
    description: 'Configurações reais, erros comuns e aprendizados ao usar Nginx em uma instância EC2.',
    date: '2024-12-03',
    tags: ['nginx', 'aws', 'infra'],
  },
  {
    id: 'jwt-validation-endpoint',
    title: 'Validação de JWT sem acoplar segurança',
    description: 'Como criar um endpoint simples para validar tokens JWT sem interferir na configuração global.',
    date: '2024-11-28',
    tags: ['backend', 'security', 'jwt'],
  },
  {
    id: 'learning-bug-bounty',
    title: 'Migrando de backend para Bug Bounty',
    description: 'Motivações, roadmap prático e primeiros erros ao estudar segurança ofensiva.',
    date: '2024-11-10',
    tags: ['security', 'bug-bounty'],
  }];


  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
