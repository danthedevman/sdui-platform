export default function Banner({ tone, text }) {
  return (
    <div style={{ padding: 12, background: "#eef" }}>
      <strong>{tone?.toUpperCase()}:</strong> {text}
    </div>
  );
}
