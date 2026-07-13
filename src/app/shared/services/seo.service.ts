import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { PostHeaders } from '../models/PostHeaders';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);
  private siteUrl = environment.siteUrl;
  private defaultOg = `${this.siteUrl}/assets/og-default.png`;

  setPage(title: string, description: string, path: string): void {
    const url = this.siteUrl + path;
    this.title.setTitle(title);
    this.setCommonMeta(description, url, 'website');
  }

  setPost(headers: PostHeaders, path: string): void {
    const url = this.siteUrl + path;
    const pageTitle = `${headers.title} — Artur Sousa`;
    this.title.setTitle(pageTitle);
    this.setCommonMeta(headers.description, url, 'article');
    this.meta.updateTag({ property: 'article:published_time', content: headers.date });
    this.removeArticleTags();
    headers.tags.forEach((tag) =>
      this.meta.addTag({ property: 'article:tag', content: tag })
    );
  }

  setNoindex(): void {
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  clearCustomMeta(): void {
    this.meta.removeTag('name="robots"');
    this.removeArticleTags();
  }

  private removeArticleTags(): void {
    this.meta.getTags('name="article:tag"').forEach((t) => t.remove());
    this.meta.getTags('property="article:tag"').forEach((t) => t.remove());
  }

  private setCommonMeta(description: string, url: string, ogType: 'website' | 'article'): void {
    const pageTitle = this.title.getTitle();

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:site_name', content: 'Artur Sousa' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: this.defaultOg });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: this.defaultOg });

    this.upsertCanonical(url);
  }

  private upsertCanonical(url: string): void {
    let link = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
