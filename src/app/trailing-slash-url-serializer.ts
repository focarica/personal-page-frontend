import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);

    if (url === '/' || url.endsWith('/')) {
      return url;
    }

    const suffixIndex = url.search(/[?#]/);
    if (suffixIndex === -1) {
      return `${url}/`;
    }

    return `${url.slice(0, suffixIndex)}/${url.slice(suffixIndex)}`;
  }
}
