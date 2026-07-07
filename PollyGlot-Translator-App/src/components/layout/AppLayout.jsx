import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-container">{children}</main>
    </div>
  );
}
