import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <>
      <Header />

      <main className="main-container">{children}</main>
    </>
  );
}
