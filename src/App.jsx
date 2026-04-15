import { useEffect, useMemo, useState } from 'react'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

const whatsappNumber = '5511999999999'

const categories = [
  {
    title: 'Doméstica',
    text: 'Soluções práticas para limpeza diária da sua casa.',
    image: '/images/categories/domestica.jpg',
  },
  {
    title: 'Profissional',
    text: 'Alto desempenho para empresas, clínicas e indústrias.',
    image: '/images/categories/profissional.jpg',
  },
  {
    title: 'Automotivo',
    text: 'Linha completa para estética e conservação automotiva.',
    image: '/images/categories/automotivo.jpg',
  },
]

const testimonials = [
  {
    name: 'Fernanda Lima',
    company: 'Hotel Costa Azul',
    text: 'Padronizamos nossa limpeza com a Maxx Limp e tivemos redução de custos em poucas semanas.',
  },
  {
    name: 'Rafael Souza',
    company: 'Auto Center RS',
    text: 'Produtos automotivos com excelente rendimento. O atendimento no WhatsApp é muito rápido.',
  },
  {
    name: 'Marina Alves',
    company: 'Condomínio Jardim Real',
    text: 'Qualidade profissional e entrega confiável. Recomendo para quem busca consistência.',
  },
]

const differentials = [
  'Qualidade certificada e fórmulas de alto rendimento',
  'Atendimento consultivo para indicação do produto ideal',
  'Reposição rápida e catálogo organizado por categoria',
  'Condições especiais para compras recorrentes',
]

function createWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categoryFilters = useMemo(
    () => ['Todos', ...new Set(products.map((product) => product.category))],
    [],
  )

  const visibleProducts = useMemo(() => {
    if (selectedCategory === 'Todos') return products
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const handleOrder = (productName) => {
    const url = createWhatsAppUrl(
      `Olá! Quero pedir o produto: ${productName}. Pode me enviar mais detalhes?`,
    )
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [selectedCategory])

  return (
    <div className="text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="Maxx Limp"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#categorias" className="transition hover:text-primary">Categorias</a>
            <a href="#catalogo" className="transition hover:text-primary">Catálogo</a>
            <a href="#contato" className="transition hover:text-primary">Contato</a>
          </nav>
          <a
            href={createWhatsAppUrl('Olá! Quero falar com a equipe Maxx Limp.')}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:brightness-95 sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[72svh] overflow-hidden bg-slate-950 md:min-h-[calc(100vh-81px)]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/hero/banner-mobile.png" />
            <img
              src="/images/hero/banner.jpg"
              alt="Linha de produtos Maxx Limp"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[72svh] w-full max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-14 md:min-h-[calc(100vh-81px)] md:py-24">
            <div className="reveal max-w-2xl text-white">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent sm:text-sm sm:tracking-[0.3em]">
                Produtos de limpeza para casa e empresas
              </p>
              <h1 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
                Soluções de limpeza que ocupam o espaço certo: resultado, rendimento e presença.
              </h1>
              <p className="mt-4 max-w-lg text-sm text-slate-200 sm:text-base md:mt-5 md:text-lg">
                A Maxx Limp oferece linhas doméstica, profissional e automotiva com foco em performance, economia e confiança para cada rotina.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                <a
                  href="#catalogo"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Ver Produtos
                </a>
                <a
                  href={createWhatsAppUrl('Olá! Quero conhecer o catálogo da Maxx Limp.')}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-16">
          <div className="mb-6 text-center md:mb-8">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Categorias</h2>
            <p className="mt-2 text-slate-600">Encontre facilmente a linha ideal para seu tipo de uso.</p>
          </div>
          <div className="mobile-scroll-grid flex gap-4 overflow-x-auto pb-1 md:grid md:overflow-visible md:pb-0 md:grid-cols-3 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section id="catalogo" className="bg-light py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">Catálogo</h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
                  Escolha uma categoria e peça o produto direto no WhatsApp.
                </p>
              </div>

              <div className="mobile-scroll-grid flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
                {categoryFilters.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onOrder={handleOrder} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-16">
          <div className="reveal rounded-3xl bg-primary p-5 text-white sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Diferenciais Maxx Limp</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-2">
              {differentials.map((item) => (
                <p key={item} className="rounded-xl bg-white/10 px-3 py-3 text-xs leading-relaxed sm:px-4 sm:text-sm">
                  ✓ {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light py-10 md:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mb-6 text-center md:mb-8">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">Depoimentos</h2>
              <p className="mt-2 text-slate-600">Empresas e clientes que confiam na Maxx Limp.</p>
            </div>
            <div className="mobile-scroll-grid flex gap-4 overflow-x-auto pb-1 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
              {testimonials.map((item) => (
                <article key={item.name} className="reveal min-w-[84%] rounded-2xl bg-white p-5 shadow-soft md:min-w-0 md:p-6">
                  <p className="text-sm text-slate-600">“{item.text}”</p>
                  <p className="mt-4 font-semibold text-primary">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.company}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 md:py-16">
          <div className="reveal rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-soft sm:p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Pronto para abastecer seu estoque?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Fale com nosso time comercial e receba sugestões de produtos conforme sua necessidade.
            </p>
            <a
              href={createWhatsAppUrl('Olá! Quero receber uma proposta da Maxx Limp.')}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95 sm:mt-6 sm:px-6"
            >
              Solicitar atendimento no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <a
        href={createWhatsAppUrl('Olá! Vim pelo site da Maxx Limp e quero atendimento.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105 hover:bg-[#1ebe5b] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 fill-current sm:h-7 sm:w-7"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.53 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.58 5.95L0 24l6.38-1.67a11.87 11.87 0 0 0 5.68 1.45h.01c6.54 0 11.87-5.32 11.87-11.86 0-3.17-1.23-6.15-3.42-8.44Zm-8.45 18.3h-.01a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.79 1 1.01-3.7-.23-.38a9.91 9.91 0 0 1-1.52-5.24c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.48-4.46 9.93-9.9 9.93Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5a9.04 9.04 0 0 1-1.68-2.08c-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.08-.12-.28-.2-.58-.35Z" />
        </svg>
      </a>

      <footer className="border-t border-slate-100 bg-primary py-8 text-slate-200 md:py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-2 px-4 text-xs sm:px-6 sm:text-sm md:flex-row md:items-center md:gap-3">
          <p>© {new Date().getFullYear()} GABRIEL HENRIQUE DA CRUZ MACHADO - WebDeveloper. Todos os direitos reservados.</p>
          <p>Catálogo demonstrativo preparado para futura integração.</p>
        </div>
      </footer>
    </div>
  )
}
