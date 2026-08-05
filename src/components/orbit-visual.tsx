export function OrbitVisual() {
  return (
    <div className="orbit-visual" aria-label="Illustration of a target account moving through a coordinated outreach system">
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-core">
        <span>Qualified</span>
        <strong>Conversation</strong>
      </div>
      <div className="orbit-card card-account">
        <small>01 · Target account</small>
        <strong>ICP matched</strong>
        <span>Sector · Region · Fit</span>
      </div>
      <div className="orbit-card card-message">
        <small>02 · Relevant outreach</small>
        <strong>Buyer context found</strong>
        <span>Email · LinkedIn · Call</span>
      </div>
      <div className="orbit-card card-meeting">
        <small>03 · Sales handoff</small>
        <strong>Meeting brief ready</strong>
        <span>Need · Timing · Next step</span>
      </div>
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-dot dot-three" />
    </div>
  );
}
