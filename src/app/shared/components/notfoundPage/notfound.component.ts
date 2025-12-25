import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      <h1 class="text-6xl font-semibold text-glitch-blue-soft mb-2">
        404
      </h1>

      <p class="text-text-muted mb-6">
        Page not found
      </p>

      <button
        routerLink=""
        class="text-sm underline text-text-muted hover:text-glitch-aqua hover:cursor-pointer transition"
        aria-label="Voltar para a home">
        Go back to home
      </button>
    </section>
  `
})
export class NotFoundComponent {
}
