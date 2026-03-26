import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/personal-banking/home-loan',
        destination: '/home-loan',
        permanent: true,
      },
      {
        source: '/personal-banking/personal-loan',
        destination: '/personal-loan',
        permanent: true,
      },
      {
        source: '/personal-banking/savings-account',
        destination: '/savings-account',
        permanent: true,
      },
      {
        source: '/business-banking/current-account',
        destination: '/current-account',
        permanent: true,
      },
      {
        source: '/personal-banking/deposits',
        destination: '/deposits',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
