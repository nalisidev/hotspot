export interface Package {
  /**
   * @param duration - The amount of time it takes for this package to deplete
   *
   */
  duration: string
  /**
   * @param devices - The number of devices that can connect
   *
   */
  devices: number
  /**
   * @param price - Price for the package
   *
   */
  price: number,
}

export interface HotspotProps {
  packages: Package[]
  voucherUrl: string | undefined
  packagePurchaseUrl: string | undefined
  theme?: 'green' | undefined
}
