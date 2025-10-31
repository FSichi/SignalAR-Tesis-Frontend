export const getUrlRedirectForSession = (url) => {

    let urlRedirect = '';

    if (url.includes('/app')) {
        urlRedirect = url;
    } else if (url.includes('/auth')) {
        urlRedirect = '/app/dashboard';
    } else {
        urlRedirect = '/404';
    }

    return urlRedirect;
}
