import seoConfig from 'data/next-seo.config';
import { NextSeo } from 'next-seo';

export default function Head() {
  return <NextSeo {...seoConfig} useAppDir={true} />;
}
