export type SocialLink = {
  label: string;
  href: string;
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
  // links: [
  //   { label: "Portfolio", href: "/portfolio" },
  //   { label: "Photography", href: "/photography" },
  // ],
  colors: {
    primary: "#ff69b4",
    secondary: "#e0115f",
    accent: "#ffd1dc",
  },
};
