# Hotspot

## Use Directly in your HTML

### Standard

You can get the standard HTML and Javascript code by clicking on the "HTML & Javascript" button in the "Share" tab of your typebot.

There, you can change the container dimensions. Here is a code example:

```html
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hotspot</title>
  </head>
  <body>
    <script type="module">
      import Hotspot from "https://cdn.jsdelivr.net/npm/wezeshanet-hotspot-js@0.0.13/lib/web.js";

      Hotspot.initHotspot({
        packages: [
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package One",
            id: 1
          },
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package Two",
            id: 2
          },
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package Three",
            id: 3
          },
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package Four",
            id: 4
          },
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package Five",
            id: 5
          },
          {
            amount: 200,
            devices: 2,
            duration: "2 hours",
            name: "Package Six",
            id: 6
          },
        ],
        voucherUrl: "http://localhost:3000/voucher",
        packagePurchaseUrl: "http://localhost:3000/purchase",
        csrfToken: '',
        logo: 'https://th.bing.com/th/id/R.e1d709fc01d327cd5d8a429b27fc41b6?rik=KSdagOU4oA61ug&pid=ImgRaw&r=0', //url or toDataUrl(imagePath) or undefined
        dark: true,
        theme: 'yellow' // 'green' | 'blue' | 'red' | 'orange' | 'slate' | 'stone' | 'neutral' | 'violet' | 'zinc' | 'rose' | 'gray' | undefined
      });
    </script>

    <hotspot-standard>
    </hotspot-standard>
  </body>
</html>
```

This code is creating a container with a 100% width (will match parent width) and 600px height.
