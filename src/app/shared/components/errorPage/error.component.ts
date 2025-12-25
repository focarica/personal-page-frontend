import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-full flex items-center justify-center px-6">
      <div class="flex flex-col items-center text-center max-w-md -translate-y-10">

        <!-- Gear Illustration (visual only) -->
        <div class="mb-10 opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="200"
            height="200"
            fill="none"
            class="select-none"
            aria-hidden="true"
          >
            <g class="gear-large" fill="#546E7A">
              <g transform="translate(35, 65)">
                <rect x="-4" y="-22" width="8" height="44" rx="1" />
                <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(45)" />
                <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(90)" />
                <rect x="-4" y="-22" width="8" height="44" rx="1" transform="rotate(135)" />
                <circle r="16" />
                <circle r="6" fill="#f4f7f6" />
              </g>
            </g>

            <g class="gear-small" fill="#78909C">
              <g transform="translate(75, 35)">
                <rect x="-3.5" y="-18" width="7" height="36" rx="1" />
                <rect x="-3.5" y="-18" width="7" height="36" rx="1" transform="rotate(45)" />
                <rect x="-3.5" y="-18" width="7" height="36" rx="1" transform="rotate(90)" />
                <rect x="-3.5" y="-18" width="7" height="36" rx="1" transform="rotate(135)" />
                <circle r="12" />
                <circle r="5" fill="#f4f7f6" />
              </g>
            </g>

            <g class="gear-tiny" fill="#B0BEC5">
              <g transform="translate(35, 25)">
                <rect x="-2.5" y="-12" width="5" height="24" rx="0.5" />
                <rect x="-2.5" y="-12" width="5" height="24" rx="0.5" transform="rotate(60)" />
                <rect x="-2.5" y="-12" width="5" height="24" rx="0.5" transform="rotate(120)" />
                <circle r="8" />
                <circle r="3" fill="#f4f7f6" />
              </g>
            </g>
          </svg>
        </div>

        <h1 class="text-7xl md:text-8xl font-extrabold text-amber-500 mb-3 tracking-tight">
          500
        </h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-metal-noise mb-4">
          Something broke internally
        </h2>

        <p class="text-metal-noise text-lg mb-8 leading-relaxed">
          An unexpected error occurred on our side.<br />
          We're already working to fix it.
        </p>

        <button
          routerLink=""
          class="text-lg underline underline-offset-4 text-text-muted
                 hover:text-amber-400 transition-colors"
          aria-label="Go back to home"
        >
          Go back to home
        </button>

      </div>
    </section>
  `
})
export class ErrorComponent {
  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
