import { layoutRegistry } from "../layouts/registry";
import { componentRegistry } from "../components/registry";

function renderNode(node) {
  const C = componentRegistry[node.type];
  return C ? <C key={node.id} {...node.props} /> : null;
}

function renderSlot(slots, name) {
  const slot = slots.find((s) => s.name === name);
  return slot ? slot.components.map(renderNode) : null;
}

export default function ScreenRenderer({ screen }) {
  const Layout = layoutRegistry[screen.layout.id] || layoutRegistry.marketing;
  return <Layout slots={screen.slots} renderSlot={renderSlot} />;
}
