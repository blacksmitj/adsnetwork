import Product from "../Product";

const Products = () => {
  return (
    <div className="flex flex-col relative justify-center md:items-center gap-12">
      <p className="text-hitam text-lg font-semibold text-center px-8">
        Pilihan produk dan layanan yang sesuai dengan kebutuhan kamu
      </p>
      <div className="flex gap-4 overflow-x-auto px-4 md:mx-8 max-w-[1420px] snap-mandatory snap-x">
        <Product
          title="Rumah"
          speed="10Mbps"
          price="Rp.165.000"
          points={[
            "Speed Up To 10Mbps",
            "Bebas FUP",
            "Bandwidth Unlimited",
            "Support 24 Jam",
          ]}
        />
        <Product
          featured
          title="Profesional"
          speed="40Mbps"
          price="Rp.320.000"
          points={[
            "Speed Up To 10Mbps",
            "Bebas FUP",
            "Bandwidth Unlimited",
            "Support 24 Jam",
          ]}
        />
        <Product
          title="Perusahaan"
          speed="Needs"
          price="Price?"
          points={[
            "Speed Up To 10Mbps",
            "Bebas FUP",
            "Bandwidth Unlimited",
            "Support 24 Jam",
          ]}
        />
      </div>
    </div>
  );
};

export default Products;
