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

export const themes = {
  blue: 'theme-blue',
  green: 'theme-green',
  red: 'theme-red',
  orange: 'theme-orange',
  yellow: 'theme-yellow',
  slate: 'theme-slate',
  stone: 'theme-stone',
  neutral: 'theme-neutral',
  violet: 'theme-violet',
  zinc: 'theme-zinc',
  rose: 'theme-rose',
  gray: 'theme-gray'
}

export interface HotspotProps {
  packages: Package[]
  voucherUrl: string | undefined
  packagePurchaseUrl: string | undefined,
  csrfToken: string,
  logo?: string
  dark?: boolean
  theme?: 'green' | 'blue' | 'red' | 'orange' | 'slate' | 'stone' | 'neutral' | 'violet' | 'zinc' | 'rose' | 'gray' | undefined
}
