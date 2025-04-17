import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "./components/header";
import MainVisual from "./components/mainVisual";
import Features from "./components/mainFeatures";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
      id="wrap"
    >
      <Header></Header>
      <main>
        <MainVisual></MainVisual>
        <Features></Features>

        <section className="bg-white w-full  dark:bg-gray-900 flex flex-col items-center justify-center">
          <div className="lg:grid lg:grid-cols-[60%_40%] lg:h-screen lg:place-content-center w-7xl">
            <ul>
              <li>
                <div className="card bg-base-100 w-96 shadow-sm">
                  <figure>
                    <Image
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                      width={400}
                      height={400}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div>Dua</div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
