import Header from "../Header";
import Footer from "../Footer";
import "../../styles/index.css";
import "../../styles/fonts.css";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto p-4 md:px-8 md:pb-16 w-full flex-col justify-center items-center ">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
