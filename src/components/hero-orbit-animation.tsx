import Image from "next/image";

const people = [
  {
    src: "/team/sample-founder.jpg",
    pathClassName: "hero-orbit-person-one",
    cardClassName: "hero-orbit-card-left",
    eyebrow: "Market strategy",
    title: "Define the right audience",
    copy: "Clear ICPs, markets, and buying roles before outreach begins.",
  },
  {
    src: "/team/sample-strategy-lead.jpg",
    pathClassName: "hero-orbit-person-two",
    cardClassName: "hero-orbit-card-left",
    eyebrow: "Account research",
    title: "Find the right accounts",
    copy: "Focused research surfaces companies with the strongest fit.",
  },
  {
    src: "/team/sample-research-lead.jpg",
    pathClassName: "hero-orbit-person-three",
    cardClassName: "hero-orbit-card-left hero-orbit-card-top",
    eyebrow: "Buyer mapping",
    title: "Reach decision-makers",
    copy: "The right stakeholders are mapped for every target account.",
  },
  {
    src: "/team/sample-campaign-lead.jpg",
    pathClassName: "hero-orbit-person-four",
    cardClassName: "",
    eyebrow: "Campaign team",
    title: "Create better conversations",
    copy: "Personalized campaigns turn relevant prospects into meetings.",
  },
] as const;

const channels = [
  {
    type: "message",
    pathClassName: "hero-orbit-channel-one",
    cardClassName: "",
    eyebrow: "Personalized outreach",
    title: "Messages built to earn replies",
  },
  {
    type: "target",
    pathClassName: "hero-orbit-channel-two",
    cardClassName: "hero-orbit-card-left hero-orbit-card-top",
    eyebrow: "Account targeting",
    title: "Every touchpoint stays focused",
  },
  {
    type: "signal",
    pathClassName: "hero-orbit-channel-three",
    cardClassName: "hero-orbit-card-left",
    eyebrow: "Campaign insights",
    title: "Learn and improve continuously",
  },
] as const;

function OrbitChannelIcon({ type }: { type: "message" | "target" | "signal" }) {
  if (type === "message") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6.5h14v9H9l-4 3v-12Z" />
        <path d="m8 10 3 2 5-3" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="6.5" />
        <circle cx="12" cy="12" r="2.25" />
        <path d="m14 10 5-5M16 5h3v3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 16.5v-3M12 16.5v-7M18 16.5v-11" />
    </svg>
  );
}

export function HeroOrbitAnimation() {
  return (
    <div className="hero-orbit-art" aria-label="Growth Orbits campaign process">
      <span className="hero-orbit-aura" aria-hidden="true" />
      <span className="hero-orbit-ring hero-orbit-ring-outer" aria-hidden="true" />
      <span className="hero-orbit-ring hero-orbit-ring-third" aria-hidden="true" />
      <span className="hero-orbit-ring hero-orbit-ring-middle" aria-hidden="true" />
      <span className="hero-orbit-ring hero-orbit-ring-inner" aria-hidden="true" />

      <span className="hero-orbit-centre">
        <strong>1:1</strong>
        <small>Account focus</small>
      </span>

      {people.map((person) => (
        <span className={`hero-orbit-path ${person.pathClassName}`} key={person.src}>
          <button className="hero-orbit-item hero-orbit-node" type="button" aria-label={`${person.eyebrow}: ${person.title}`}>
            <span className="hero-orbit-node-media hero-orbit-person" aria-hidden="true">
              <Image src={person.src} alt="" fill sizes="64px" />
            </span>
            <span className={`hero-orbit-card ${person.cardClassName}`}>
              <small>{person.eyebrow}</small>
              <strong>{person.title}</strong>
              <span>{person.copy}</span>
            </span>
          </button>
        </span>
      ))}

      {channels.map((channel) => (
        <span className={`hero-orbit-path ${channel.pathClassName}`} key={channel.type}>
          <button className="hero-orbit-item hero-orbit-node" type="button" aria-label={`${channel.eyebrow}: ${channel.title}`}>
            <span className="hero-orbit-node-media hero-orbit-channel" aria-hidden="true">
              <OrbitChannelIcon type={channel.type} />
            </span>
            <span className={`hero-orbit-card hero-orbit-channel-card ${channel.cardClassName}`}>
              <small>{channel.eyebrow}</small>
              <strong>{channel.title}</strong>
            </span>
          </button>
        </span>
      ))}

      <span className="hero-orbit-path hero-orbit-tracer hero-orbit-tracer-one" aria-hidden="true"><i /></span>
      <span className="hero-orbit-path hero-orbit-tracer hero-orbit-tracer-two" aria-hidden="true"><i /></span>
      <span className="hero-orbit-path hero-orbit-tracer hero-orbit-tracer-three" aria-hidden="true"><i /></span>
      <span className="hero-orbit-signal" aria-hidden="true" />
      <span className="hero-orbit-signal hero-orbit-signal-delayed" aria-hidden="true" />
    </div>
  );
}
