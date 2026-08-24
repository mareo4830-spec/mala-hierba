export type MenuCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'burgers',
    title: 'Burgers Salvajes',
    tagline: 'Carne brutal',
    description:
      'Hamburguesas elaboradas con carne madurada, pan de masa madre y salsas de la casa. Nada de junk food.',
    image:
      'https://images.pexels.com/photos/37881956/pexels-photo-37881956.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Hamburguesa gourmet sobre fondo negro',
  },
  {
    id: 'picoteo',
    title: 'Picoteo',
    tagline: 'Para compartir',
    description:
      'Tapas y raciones con ingredientes top y una estética original. Para acompañar la cerveza y la conversación.',
    image:
      'https://images.pexels.com/photos/31544800/pexels-photo-31544800.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Tabla de tapas españolas en platos oscuros',
  },
  {
    id: 'cervezas',
    title: 'Cervezas',
    tagline: 'Frías como el infierno',
    description:
      'Tirada perfecta, artesanas y las clásicas de siempre. El acompañamiento obligatorio del rock.',
    image:
      'https://images.pexels.com/photos/5659492/pexels-photo-5659492.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Cerveza oscura sirviéndose en vaso',
  },
];

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    id: 'nataly',
    name: 'Nataly Rivera',
    text: 'Maravilloso! La atención suuuuper bien, la comida ni se diga... buena música, buena energía, nada de contaminación visual.',
    rating: 5,
  },
  {
    id: 'eduardo',
    name: 'Eduardo Maestre',
    text: 'Tienen una variedad bastante interesante en la carta y merece la pena probar todo, las camareras son unas pedazo de makinas!!!',
    rating: 5,
  },
  {
    id: 'francisco',
    name: 'Francisco Romero',
    text: 'Han abierto hace poco en La Merced con una carta muy especial y platos elaborados, nada de junk food! La estética del local también muy original.',
    rating: 5,
  },
];

export const navLinks = [
  { id: 'filosofia', label: 'Filosofía' },
  { id: 'carta', label: 'La Carta' },
  { id: 'resenas', label: 'Reseñas' },
  { id: 'ubicacion', label: 'Dónde estamos' },
] as const;
