

import en from '../../../locales/en/translations.json';
import ro from '../../../locales/ro/translations.json';


type Lang = 'en' | 'ro';


export default async function HomePage({ params }: { params: { lang: Lang } }) {
  const { lang } = await params;
  const t = lang === 'en' ? en : ro;

  return (
    <>
      <main>
        <h1>{t.home.welcome}</h1>
      </main>
    </>
  );
}