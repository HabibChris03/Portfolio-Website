export function SectionHeader({ eyebrow, title, intro, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h1 className="section-title">{title}</h1>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
