// Past events — add or edit entries here, the Past Events slider renders
// whatever is in this array.

export interface PastEvent {
  id: string
  title: string
  description: string
  image: string
  alt: string
}

export const events: PastEvent[] = [
  {
    id: 'record-store-day-drops',
    title: 'Record Store Day Drops',
    description: 'In collaboration with Record Store Day Indonesia and HeyFolks!',
    image: '/images/events/event-1.png',
    alt: 'Crowd browsing vinyl records at a Record Store Day pop-up',
  },
  {
    id: 'stacked-packed-delivered',
    title: 'Stacked, Packed, Delivered_ Ruko as Urban Truth',
    description: 'Coffee & Culture #2 with Setiadi Sopandi and Erick Kristanto, in collaboration with LQID Indonesia.',
    image: '/images/events/event-2.png',
    alt: 'Panel discussion in front of a projector screen',
  },
  {
    id: 'klassikhaus-recital',
    title: 'Klassikhaus Recital_ Ghibli Studio',
    description:
      'A classical music recital by Didiet Violin, Windy Setiadi, Hazim Suhadi, Isabella Anjani, and Rachman Noor.',
    image: '/images/events/event-3.png',
    alt: 'String and accordion trio performing a classical recital',
  },
  {
    id: 'turnamen-catur-wijaya-vol-1',
    title: 'Turnamen Catur Wijaya Vol. 1',
    description: '-',
    image: '/images/events/event-4.png',
    alt: 'Chess tournament event at Wijaya',
  },
  {
    id: 'life-after-98',
    title: 'Life After 98',
    description: 'A fashion show by Nichol Elenna and exhibition by Rully Kesuma. Supported by Persona Management',
    image: '/images/events/event-5.png',
    alt: 'Fashion show and exhibition event',
  },
  {
    id: 'an-infinite-exploration',
    title: 'An Infinite Exploration',
    description: 'Timeless Seeds [with Hijack Sandals and Bluesville',
    image: '/images/events/event-6.png',
    alt: 'An Infinite Exploration event',
  },
  {
    id: 'garden-riot',
    title: 'Garden Riot',
    description: 'A photography exhibition by DISK, featuring Ezra R., Vivien Nathania, and Chelsea Pearl',
    image: '/images/events/event-7.png',
    alt: 'Photography exhibition by DISK',
  },
]
