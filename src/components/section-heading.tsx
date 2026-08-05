type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading align-${align} ${invert ? "is-inverted" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
