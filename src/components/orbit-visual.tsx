import { orbitVisualContent } from "@/content/home";

export function OrbitVisual() {
  return (
    <div className="orbit-visual" aria-label="Illustration of a target account moving through a coordinated outreach system">
      <div className="orbit-status"><span />{orbitVisualContent.status}</div>
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-core">
        <span>{orbitVisualContent.centre.label}</span>
        <strong>{orbitVisualContent.centre.value}</strong>
      </div>
      {orbitVisualContent.stages.map((stage) => (
        <div className={`orbit-card ${stage.className}`} key={stage.number}>
          <small>{stage.number} · {stage.label}</small>
          <strong>{stage.value}</strong>
          <span>{stage.detail}</span>
        </div>
      ))}
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-dot dot-three" />
      <div className="orbit-caption">
        {orbitVisualContent.rhythm.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}
