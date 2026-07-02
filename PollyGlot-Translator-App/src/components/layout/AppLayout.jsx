export default function AppLayout({ children }) {
  return (
    <div className="app-container">
      <header className="header">
        <h1>PollyGlot</h1>
      </header>

      <main className="main-content">{children}</main>
    </div>
  );
}
