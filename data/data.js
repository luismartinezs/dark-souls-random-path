export default [
  {
    id: 1,
    title: 'Asylum Demon',
    prerequisites: [],
  },
  {
    id: 2,
    title: 'Stray Demon',
    prerequisites: [1],
  },
  {
    id: 3,
    title: 'Moonlight Butterlfy',
    prerequisites: [1],
  },
  {
    id: 4,
    title: 'Bell Gargoyles',
    prerequisites: [1],
  },
  {
    id: 5,
    title: 'Chaos Witch Quelaag',
    prerequisites: [1],
  },
  {
    id: 6,
    title: 'Taurus Demon',
    prerequisites: [1],
  },
  {
    id: 7,
    title: 'Great Grey Wolf Sif',
    prerequisites: [1],
  },
  {
    id: 8,
    title: 'Capra Demon',
    prerequisites: [1],
  },
  {
    id: 9,
    title: 'Gaping Dragon',
    prerequisites: [8],
  },
  {
    id: 10,
    title: 'Ceaseless Discharge',
    prerequisites: [5],
  },
  {
    id: 11,
    title: 'Four Kings',
    prerequisites: [7],
  },
  {
    id: 12,
    title: 'Iron Golem',
    prerequisites: [4, 5],
  },
  {
    id: 13,
    title: 'Crossbreed Priscilla',
    prerequisites: [12],
  },
  {
    id: 14,
    title: 'Dark Sun Gwyndolin',
    prerequisites: [12],
  },
  {
    id: 15,
    title: 'Ornstein & Smough',
    prerequisites: [12],
  },
  {
    id: 16,
    title: 'Demon Firesage',
    prerequisites: [10, 15],
  },
  {
    id: 17,
    title: 'Centipede Demon',
    prerequisites: [16],
  },
  {
    id: 18,
    title: 'Sanctuary Guardian',
    prerequisites: [15],
  },
  {
    id: 19,
    title: 'Artorias the Abysswalker',
    prerequisites: [18],
  },
  {
    id: 20,
    title: 'Black Dragon Kalamet',
    prerequisites: [18],
  },
  {
    id: 21,
    title: 'Manus, Father of the Abyss',
    prerequisites: [19],
  },
  {
    id: 22,
    title: 'Seath The Scaleless',
    prerequisites: [15],
  },
  {
    id: 23,
    title: 'The Bed of Chaos',
    prerequisites: [15],
  },
  {
    id: 24,
    title: 'Gravelord Nito',
    prerequisites: [15, 25],
  },
  {
    id: 25,
    title: 'Pinwheel',
    prerequisites: [1],
  },
  {
    id: 26,
    title: 'Gwyn, Lord of Cinder',
    prerequisites: [11, 22, 23, 24],
  },
]
