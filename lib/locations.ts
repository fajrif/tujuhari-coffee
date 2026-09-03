// Location data, sourced verbatim from README.md.
// NOTE: the "Our Flagship" section maps links and the footer's "Location"
// column links are genuinely different URLs per the source doc for both
// Wijaya and Lebak Bulus — kept as distinct fields, not collapsed.

export interface Location {
  id: string
  name: string
  status: 'open' | 'coming-soon'
  image?: string
  addressLines: string[]
  mapsUrl?: string
  footerMapsUrl?: string
  whatsappUrl?: string
  gofoodUrl?: string
  grabfoodUrl?: string
  shopeefoodUrl?: string
}

export const locations: Location[] = [
  {
    id: 'wijaya',
    name: 'Our Flagship: Wijaya',
    status: 'open',
    image: '/images/location-1.png',
    addressLines: ['Grand Wijaya Centre B8-9,', 'Jl. Wijaya II, Kebayoran Baru,', 'South Jakarta'],
    mapsUrl: 'https://maps.app.goo.gl/3ogJT5SX4HMp1uQL7',
    footerMapsUrl: 'https://maps.app.goo.gl/BwpSYWQU9i6HDMtN9',
    whatsappUrl: 'https://wa.me/628111095777',
    gofoodUrl: 'https://gofood.link/u/WAxbG',
    grabfoodUrl:
      'https://r.grab.com/g/620241119_151035_69C9EDC68CFB43EFAFE0ABD8282C23B2_MEXMPS-6-CYMGETADUALDLN',
    shopeefoodUrl:
      'https://shopee.co.id/universal-link/now-food/shop/860979?deep_and_deferred=1&shareChannel=copy_link',
  },
  {
    id: 'lebak-bulus',
    name: 'Lebak Bulus',
    status: 'open',
    image: '/images/location-2.png',
    addressLines: ['Padel Bloc,', 'Jl. Lebak Bulus I No. 14,', 'South Jakarta'],
    mapsUrl: 'https://maps.app.goo.gl/6RAQHS6Dkyh9LsdX6',
    footerMapsUrl: 'https://maps.app.goo.gl/9wvvzY8bLxP9Lf5R6',
    whatsappUrl: 'https://wa.me/628179916777',
    gofoodUrl: 'https://gofood.link/a/TjmQTvf',
    grabfoodUrl:
      'https://food.grab.com/id/id/restaurant/tujuhari-coffee-lebak-bulus-delivery/6-C76KCXB2CGNXV2?',
    shopeefoodUrl:
      'https://shopee.co.id/universal-link/now-food/shop/21829224?deep_and_deferred=1&shareChannel=whatsapp',
  },
  {
    id: 'coming-soon',
    name: 'Coming Soon',
    status: 'coming-soon',
    addressLines: ['Coming Soon'],
  },
]
