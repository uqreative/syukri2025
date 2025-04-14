import Header from "../components/header"; 
import Footer from "../components/footer";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export default function About(){
    return(
        <div className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}>
            <Header></Header>
            <section>
                <h3>About Page</h3>
            </section>
            <Footer></Footer>
        </div>
        
    );

}