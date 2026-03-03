export default function DashboardLayout({ slots, renderSlot }) {
  return (
    <div className="dashboard">
      <header>{renderSlot(slots, "header")}</header>
      <div className="row">
        <aside>{renderSlot(slots, "sidebar")}</aside>
        <main>{renderSlot(slots, "main")}</main>
      </div>
      <footer>{renderSlot(slots, "footer")}</footer>
      <div className="overlays">{renderSlot(slots, "overlays")}</div>
    </div>
  );
}
