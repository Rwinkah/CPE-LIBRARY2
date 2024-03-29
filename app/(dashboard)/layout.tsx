import Image from "next/image";
import Footer from "../_components/footer";
import RespContainer from "../_components/resp_container";
import Sidebar from "../_components/sidebar";
import { BookIcon, BookXIcon } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <RespContainer class_full="fixed top-0 bottom-0 w-[200px]" hide={false} >
        <Sidebar />
      </RespContainer>

      <RespContainer id="current-page" hide={false} class_full="ml-[200px] w-full pb-5" class_sm="w-full pb-5">
        <div
          id="layout-wrapper"
          className="container min-h-screen flex flex-col justify-between"
        >
          <div id="content-wrapper" className="mt-5">
            {children}
          </div>
          <Footer />
        </div>
      </RespContainer>
    </main>
  );
}
