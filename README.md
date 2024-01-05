# Hotspot

## Use Directly in your HTML

### Standard

You can get the standard HTML and Javascript code by clicking on the "HTML & Javascript" button in the "Share" tab of your typebot.

There, you can change the container dimensions. Here is a code example:

```html
<script type="importmap">
{ "imports": {
      "vue":        "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.prod.js",
      "vue-router": "https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.5/vue-router.esm-browser.min.js"
} }
</script>
<script type="module">
  import Hotspot from 'https://cdn.jsdelivr.net/npm/@wezehsanet/hotspot-js@0.0.1/lib/web.js'

   Hotspot.initHotspot({
      packages: [
         {
         price: 200,
         devices: 2,
         duration: "2 hours"
         },
         {
         price: 200,
         devices: 2,
         duration: "2 hours"
         },
      ],
      voucherUrl: 'http://localhost:3000/voucher',
      packagePurchaseUrl: 'http://localhost:3000/purchase'
   })
</script>

<hotspot-standard style="width: 100%; height: 600px; "></hotspot-standard>
```

This code is creating a container with a 100% width (will match parent width) and 600px height.
