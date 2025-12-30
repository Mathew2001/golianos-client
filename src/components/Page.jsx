import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

const Page = () => {
  const { slug } = useParams(); // undefined for home
  const { pagesByBusinessId } = useSelector((s) => s.pageReducer);

  const pageSlug = slug || "home"; // default page

  const page = pagesByBusinessId.find((p) => p.slug === pageSlug);

  if (!page) return <div>Page not found</div>;



  return (
    <div>
      {
        pageSlug === "home" ? <Home />
          : pageSlug === "about" ? <About />
            : pageSlug === "services" ? <Services />
              : <div>Page not found</div>
      }
    </div>
  );
};

export default Page;
