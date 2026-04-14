export default function CategoryCard({ title, image, text }) {
  return (
    <article className="reveal min-w-[78%] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 md:min-w-0">
      <img
        src={image}
        alt={title}
        className="h-32 w-full object-cover sm:h-40 md:h-44"
        loading="lazy"
      />
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-semibold text-primary sm:text-lg">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{text}</p>
      </div>
    </article>
  )
}
