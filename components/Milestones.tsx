const MILESTONES = [
  { value: "+50", label: "años de trayectoria" },
  { value: "3", label: "generaciones Fantasia" },
  { value: "Mendoza y Cuyo", label: "presencia industrial" },
];

export default function Milestones() {
  return (
    <section id="trayectoria" className="bg-accent py-14 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {MILESTONES.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 py-6 text-center sm:py-0"
            >
              <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {value}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/85">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
