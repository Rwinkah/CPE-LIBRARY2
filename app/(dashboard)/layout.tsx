import Footer from "../_components/footer";
import Sidebar from "../_components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <aside className="fixed top-0 bottom-0 w-[200px]">
        <Sidebar />
      </aside>
      <div id="current-page" className="ml-[200px] w-full pb-5">
        <div
          id="layout-wrapper"
          className="container min-h-screen flex flex-col justify-between"
        >
          <div id="content-wrapper" className="mt-5">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
