import Image from "next/image";
import Footer from "../_components/footer";
import RespContainer from "../_components/resp_container";
import Sidebar from "../_components/sidebar";
import { BookIcon, BookXIcon } from "lucide-react";
import Header from "../_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-0 min-h-[100vh]">
      <RespContainer class_full="fixed top-0 bottom-0" hide={false} >
        <Sidebar />
      </RespContainer>
 
      <RespContainer id="current-page" hide={false} class_full="flex flex-col ml-[200px] w-full justify-between h-[100%]" class_sm="w-full pb-5 mb-20">
        <div
          id="layout-wrapper"
          className="container flex flex-col justify-between ml-0"
        >
          <div id="content-wrapper" className="mt-5 flex flex-col">
              <Header/>
            {children}
          </div>
          <Footer/>
        </div>
      </RespContainer>
    </main>
  );
}
