import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="h-screen flex flex-col justify-center items-center text-center px-6">
      
      <h1 class="text-5xl font-semibold text-text-secondary mb-3">
        500
      </h1>

      <p class="text-text-muted max-w-md mb-8">
        An internal error has occurred.<br />
        Please try again later.
      </p>

      <button
        routerLink=""
        class="text-sm underline text-text-muted hover:text-glitch-aqua transition"
        aria-label="Go back to home">
        Go back to home
      </button>

    </section>
  `
})
export class ErrorComponent {}
