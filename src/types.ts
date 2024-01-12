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
  amount: number
  /**
   * @param name - Pacakage name
   *
   */
  name: string
  /**
   * @param id - Server identifier
   *
   */
  id: number
}

export interface HotspotProps {
  packages: Package[]
  voucherUrl: string | undefined
  packagePurchaseUrl: string | undefined,
  csrfToken: string,
  logo?: string
  theme?: 'green' | undefined
}
