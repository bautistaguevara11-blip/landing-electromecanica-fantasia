import Image from "next/image";

const BRANDS = [
  { name: "Rowa", src: "/images/logo-rowa.png" },
  { name: "Czerweny", src: "/images/logo-czerweny.png" },
];

export default function Brands() {
  return (
    <section id="marcas" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
            Service oficial y representantes de
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Marcas que representamos
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center rounded-xl border border-navy-100 bg-white p-10 shadow-sm"
            >
              <div className="relative h-20 w-full max-w-xs">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="(min-width: 640px) 320px, 80vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
