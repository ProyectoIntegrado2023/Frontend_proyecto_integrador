export function determinarUrl(routerUrl: string, params: string): string {
    const currentUrl = routerUrl;
    const parts = currentUrl.split('/');
    const url = parts.slice(1, parts.indexOf(params) + 2).join('/')

    return url;
}