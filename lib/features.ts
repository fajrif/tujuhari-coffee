export interface Feature {
  id: string
  label: string
  image: string
  alt: string
  body: string
}

export const features: Feature[] = [
  {
    id: 'signature',
    label: 'OUR SIGNATURE',
    image: '/images/feature-1.png',
    alt: 'Hand holding an iced kopi susu',
    body: 'Meet Kopi Harian, our signature kopi susu made with 100% Arabica beans sourced locally. Nuanced, rich, and balanced, it brings out a nuanced espresso profile with a special secret touch that adds depth to every sip.',
  },
  {
    id: 'beverages',
    label: 'OUR BEVERAGES',
    image: '/images/feature-2.png',
    alt: 'Barista pouring hot water over a V60 filter',
    body: 'We serve high-quality Arabica coffee with bright acidity and nuanced flavors, highlighting local beans and their unique regional profiles. Each cup is carefully crafted using professional-grade equipment to ensure consistent quality across our espresso-based and hand-poured selections. Beyond coffee, we offer healthy smoothies, a curated matcha series, and refreshing cold brew for every ritual, from a morning boost to an afternoon reset.',
  },
  {
    id: 'kitchen',
    label: 'OUR KITCHEN',
    image: '/images/feature-3.png',
    alt: 'Kitchen staff plating a takeaway meal',
    body: 'From breakfast to dinner, our kitchen serves Japanese and Indonesian comfort food made to satisfy any time of day. Enjoy favorites like gyudon, chicken nanban, chicken katsu curry, mie goreng sapi tek-tek, bakmie bebek asap, and nasi goreng Chindo. Alongside a selection of artisanal pastries, perfectly paired with our coffee.',
  },
]
