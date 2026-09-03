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
    image: '/images/event-1.png',
    alt: 'Crowd browsing vinyl records at a Record Store Day pop-up',
  },
  {
    id: 'stacked-packed-delivered',
    title: 'Stacked, Packed, Delivered_ Ruko as Urban Truth',
    description: 'Coffee & Culture #2 with Setiadi Sopandi and Erick Kristanto, in collaboration with LQID Indonesia.',
    image: '/images/event-2.png',
    alt: 'Panel discussion in front of a projector screen',
  },
  {
    id: 'klassikhaus-recital',
    title: 'Klassikhaus Recital_ Ghibli Studio',
    description:
      'A classical music recital by Didiet Violin, Windy Setiadi, Hazim Suhadi, Isabella Anjani, and Rachman Noor.',
    image: '/images/event-3.png',
    alt: 'String and accordion trio performing a classical recital',
  },
]
