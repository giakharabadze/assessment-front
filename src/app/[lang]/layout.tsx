import Header from "@/components/Header"



export default async function Layout({
    params,
    children,
  }: {
    params: {
        lang: 'en' | 'ro'
      },
    children: React.ReactNode;
    
  }) {
    const { lang } = await params;
    
    return (
      <div >
        <Header lang={lang} />
        <main className="w-full p-8">
        {children}
        </main>
      </div>
    );
  }