export default function ClayCard({ children }) {
  return (
    <div style={{
      background: '#f0f0f3',
      borderRadius: '20px',
      boxShadow: '9px 9px 16px #bebebe, -9px -9px 16px #ffffff',
      padding: '1.5rem',
    }}>
      {children}
    </div>
  );
}
