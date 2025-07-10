
"use client"
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import en from '@/locales/en/translations.json';
import ro from '@/locales/ro/translations.json';


export default function Header({lang}: {lang: "en" | "ro"}) {
    const router = useRouter();
    const pathname = usePathname();

    const switchLang = (newLang: 'en' | 'ro') => {
        const segments = pathname.split('/'); 
        segments[1] = newLang; 
        const newPath = segments.join('/');
        router.push(newPath);
      };

    const t = lang === 'en' ? en : ro;
    
    return (
        <div className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
            <div className="flex gap-4">
            <Link className={`${pathname.includes('home') ? 'text-black' : 'text-gray-500 '} hover:underline`} href={`/${lang}/home`}>{t.header.home}</Link>
            <Link className={`${pathname.includes('about') ? 'text-black' : 'text-gray-500'} hover:underline`} href={`/${lang}/about`}>{t.header.about}</Link>
            </div>
            <div className="flex gap-4 items-center">
                <span className={`cursor-pointer ${lang === 'en' ? 'text-black' : 'text-gray-400'}`} onClick={() => switchLang("en")}>EN</span>
                <span className={`cursor-pointer ${lang === 'ro' ? 'text-black' : 'text-gray-400'}`} onClick={() => switchLang("ro")}>RO</span>
            </div>
        </div>
    )
}