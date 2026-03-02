export default function Hero({ headline, subheadline, ctaText, ctaHref }) {
  return (
    <section>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      {ctaText && <a href={ctaHref}>{ctaText}</a>}
    </section>
  );
}
