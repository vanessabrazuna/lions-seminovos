import { Facebook, Instagram, Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = 'linkedin' | 'facebook' | 'instagram';

type ProviderConfig = {
  name: string;
  icon: ReactNode;
  shareUrl: (config: ShareConfig) => string;
};

export const useSocialProviders = (): Record<
  SocialProvider,
  ProviderConfig
> => {
  return {
    linkedin: {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      shareUrl: (config) =>
        `https://www.linkedin.com/lionsseminovos/sharing/share-offsite/?url=${encodeURIComponent(
          config.url
        )}`,
    },
    facebook: {
      name: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      shareUrl: (config) =>
        `https://www.facebook.com/lionsseminovos/sharer/sharer.php?u=${encodeURIComponent(
          config.url
        )}`,
    },
    instagram: {
      name: 'Instagram',
      icon: <Instagram className="h-4 w-4" />,
      shareUrl: (config) =>
        `https://instagram.com/lionsseminovos/share?url=${encodeURIComponent(
          config.url
        )}&text=${encodeURIComponent(config.title || '')}`,
    },
  };
};