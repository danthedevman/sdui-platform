import { registry } from "../components/registry";

export default function Renderer({ screen }) {
  if (!screen) return null;

  return (
    <div>
      {screen.components.map((node) => {
        const Component = registry[node.type];

        if (!Component) {
          console.warn("Unknown component:", node.type);
          return null;
        }

        return <Component key={node.id} {...node.props} />;
      })}
    </div>
  );
}
