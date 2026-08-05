export function CinematicHeroVideo({ src }: { src: string }) {
  return (
    <video
      className="video-hero-media"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
