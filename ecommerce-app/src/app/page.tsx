import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Collections } from "@/components/collections";
import { ProductGrid } from "@/components/product-grid";
import { ValueProps } from "@/components/value-props";
import { Lookbook } from "@/components/lookbook";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Collections />
        <ProductGrid
          id="women"
          title="Signature Womenswear"
          eyebrow="Women"
          products={products.filter((product) => product.category === "Women")}
        />
        <ProductGrid
          id="men"
          title="Tailored Menswear"
          eyebrow="Men"
          products={products.filter((product) => product.category === "Men")}
        />
        <ValueProps />
        <ProductGrid
          id="accessories"
          title="Accessories to complement"
          eyebrow="Accessories"
          products={products.filter(
            (product) => product.category === "Accessories",
          )}
        />
        <Lookbook />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
