export default function MarketingLayout({ slots, renderSlot }) {
  return (
    <div>
      <header>{renderSlot(slots, "header")}</header>
      <main>{renderSlot(slots, "main")}</main>
      <footer>{renderSlot(slots, "footer")}</footer>
      <div className="overlays">{renderSlot(slots, "overlays")}</div>
    </div>
  );
}
