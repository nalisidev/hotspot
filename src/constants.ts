import type { HotspotProps } from './types'

export const defaultHotspotProps: HotspotProps = {
  packagePurchaseUrl: undefined,
  voucherUrl: undefined,
  packages: [
    {
      amount: 200,
      devices: 2,
      duration: "2 hours",
      id: 1,
      name: 'packageName'
    },
    {
      amount: 200,
      devices: 2,
      duration: "2 hours",
      id: 1,
      name: 'packageName'
    },
    {
      amount: 200,
      devices: 2,
      duration: "2 hours",
      id: 1,
      name: 'packageName'
    },
    {
      amount: 200,
      devices: 2,
      duration: "2 hours",
      id: 1,
      name: 'packageName'
    },
    {
      amount: 200,
      devices: 2,
      duration: "2 hours",
      id: 1,
      name: 'packageName'
    },
  ],
  csrfToken: '',
  logo: '',
  dark: true,
  theme: 'orange'
}
