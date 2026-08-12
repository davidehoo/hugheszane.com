const TARGET = "https://holy365.app";

export default {
  fetch(request) {
    const url = new URL(request.url);
    const destination = new URL(url.pathname + url.search + url.hash, TARGET);
    return Response.redirect(destination.toString(), 301);
  },
};
