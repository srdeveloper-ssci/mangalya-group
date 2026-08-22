export type ContactPageKey =
  | "home"
  | "contact"
  | "novena-green"
  | "ophira"
  | "anant";

export interface ContactDetails {
  location?: {
    address: string;
    mapUrl: string;
  };
  instagram?: {
    handle: string;
    url: string;
  };
  phone?: string;
}

const homeLocation = {
  address: "H - 97, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201309",
  mapUrl: "https://maps.app.goo.gl/bYazbNHGBjthvCBu5",
};

export const contactDetailsByPage: Record<ContactPageKey, ContactDetails> = {
  home: {
    location: homeLocation,
    instagram: {
      handle: "@mangalya_group",
      url: "https://instagram.com/mangalya_group",
    },
  },
  contact: {
    location: homeLocation,
    instagram: {
      handle: "@mangalya_group",
      url: "https://instagram.com/mangalya_group",
    },
  },
  "novena-green": {
    location: {
      address:
        "west, Tech Zone IV, Noida Phase-2, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
      mapUrl: "https://maps.app.goo.gl/fK3Rk5dC8Vk2MDGN6?g_st=aw",
    },
    instagram: {
      handle: "@novena.green",
      url: "https://www.instagram.com/novena.green/",
    },
    phone: "8412086120",
  },
  ophira: {
    location: homeLocation,
    instagram: {
      handle: "@mangalya_group",
      url: "https://instagram.com/mangalya_group",
    },
  },
  anant: {
    location: {
      address:
        "Office : GH-9, Sector 11, Vrindavan Colony, Lucknow, Uttar Pradesh 226029",
      mapUrl: "https://maps.app.goo.gl/e8ZjGfLLX7CxsHPt8?g_st=aw",
    },
    instagram: {
      handle: "@mangalyaanant",
      url: "https://www.instagram.com/mangalyaanant/",
    },
  },
};

export function getContactDetails(page: ContactPageKey): ContactDetails {
  return contactDetailsByPage[page];
}
