export default function ProductCard({ product, onOrder }) {
  return (
    <article className="reveal flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-slate-50 via-white to-light p-3 sm:h-44 sm:p-4 md:h-56 md:p-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain object-center"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5">
        <span className="mb-2 inline-flex w-fit rounded-full bg-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary sm:mb-3 sm:px-3 sm:text-xs sm:tracking-normal">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold leading-snug text-primary sm:text-base">{product.name}</h3>
        <p className="product-description mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{product.description}</p>
        <button
          onClick={() => onOrder(product.name)}
          className="mt-3 rounded-xl bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:brightness-95 sm:mt-4 sm:px-4 sm:text-sm"
        >
          Pedir no WhatsApp
        </button>
      </div>
    </article>
  )
}
