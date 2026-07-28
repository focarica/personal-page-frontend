import { Component, inject, OnInit, OnDestroy, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SeoService } from "../../services/seo.service";

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-full flex justify-start px-6 pt-[12vh]">
      <div class="flex flex-col items-center text-center max-w-md mx-auto">

        <!-- Ilustração -->
        <svg
          class="w-56 h-56 mb-10 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.2" class="text-metal-noise"/>
          <path d="M8 15s1.5-2 4-2 4 2 4 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" class="text-metal-noise"/>
          <circle cx="9" cy="9" r="1" fill="currentColor" class="text-metal-noise"/>
          <circle cx="15" cy="9" r="1" fill="currentColor" class="text-metal-noise"/>
        </svg>

        <!-- Código -->
        <h1 class="text-7xl md:text-8xl font-semibold text-glitch-blue-soft mb-4 tracking-tight">
          404
        </h1>

        <!-- Título -->
        <h2 class="text-xl md:text-2xl font-medium text-text-secondary mb-3">
          Page not found
        </h2>

        <!-- Descrição -->
        <p class="text-text-muted text-base md:text-lg leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <!-- CTA -->
        <button
          routerLink=""
          class="text-lg md:text-base tracking-wide underline text-text-muted hover:text-glitch-aqua transition"
          aria-label="Voltar para a home">
          Go back to home
        </button>

      </div>
    </section>
  `
})
export class NotFoundComponent implements OnInit, OnDestroy {
  private seo = inject(SeoService)
  private platformId = inject(PLATFORM_ID)

  ngOnInit() {
    this.seo.setNoindex();
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
