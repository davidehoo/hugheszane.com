# hugheszane.com

301-redirects `hugheszane.com` (and any path/query) to [holy365.app](https://holy365.app/), via a Cloudflare Worker.

## Deploy

```sh
npx wrangler deploy
```

Worker: `hugheszane-redirect` on the `admin@hugheszane.com` Cloudflare account.

## Remaining setup

The domain is not yet a Cloudflare zone (nameservers still point at Google Cloud DNS).
Once `hugheszane.com` is added to Cloudflare and its nameservers are switched, attach
`hugheszane.com` and `www.hugheszane.com` to this Worker as Custom Domains.
