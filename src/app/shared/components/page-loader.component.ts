import { Component } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  template: `
    <div class="h-[5rem] w-[5rem] mx-auto my-auto mt-12 animate-spin">
      <img [src]="loadingImg" alt="Loading..." />
    </div>
  `,
})
export class PageLoaderComponent {
  loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
}
