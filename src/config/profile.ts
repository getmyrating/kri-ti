export type SocialLink = {
  label: string;
  href: string;
};

export type Photo = {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  date?: string;
};

export type ProfileConfig = {
  name: string;
  title: string;
  photoUrl: string;
  bio: string;
  location?: string;
  email?: string;
  socials?: SocialLink[];
  links?: SocialLink[];
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  photography?: {
    title: string;
    description: string;
    photos: Photo[];
  };
};

export const profile: ProfileConfig = {
  name: "Kriti",
  title: "Kunafa Lover",
  photoUrl: "../dp.jpeg",
  bio: "Bak-bak machine",
  location: "Patna",
  email: "kritilata36676@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/she_kriti_444" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100045997074333&",
    },
  ],
  links: [
    // { label: "Portfolio", href: "/portfolio" },
    { label: "Photography", href: "/photography" },
  ],
  colors: {
    primary: "#ff69b4",
    secondary: "#e0115f",
    accent: "#ffd1dc",
  },
  photography: {
    title: "My Photography",
    description: "Capturing moments through my lens",
    photos: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        alt: "Mountain landscape",
        caption: "Beautiful mountain view",
        date: "2024-01-15",
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
        alt: "Forest path",
        caption: "Peaceful forest walk",
        date: "2024-02-20",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop",
        alt: "City skyline",
        caption: "Urban architecture",
        date: "2024-03-10",
      },
      {
        id: "4",
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
        alt: "Sunset over water",
        caption: "Golden hour at the beach",
        date: "2024-04-05",
      },
      {
        id: "5",
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        alt: "Portrait shot",
        caption: "Portrait photography",
        date: "2024-05-12",
      },
      {
        id: "6",
        url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
        alt: "Flower macro",
        caption: "Macro photography",
        date: "2024-06-18",
      },
    ],
  },
};
