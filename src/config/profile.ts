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
    { label: "Photography", href: "/photography" },
    { label: "Portfolio", href: "/portfolio" },
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
        url: "../photos/1.jpeg",
        alt: "Just me",
        caption: "Just me",
        date: "2025-07-26",
      },
      {
        id: "2",
        url: "../photos/2.jpeg",
        alt: "Merry Christmas 🎄",
        caption: "Merry Christmas 🎄",
        date: "2025-07-28",
      },
      {
        id: "3",
        url: "../photos/3.jpeg",
        alt: "#InMyPrettyEra",
        caption: "#InMyPrettyEra",
        date: "2025-03-12",
      },
    ],
  },
};
