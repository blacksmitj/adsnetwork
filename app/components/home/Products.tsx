import Product from "../Product";

const Products = () => {
  return (
    <div className="flex flex-col relative justify-center lg:items-center gap-12 px-2">
      <div className="flex flex-col items-center px-4">
        <p className="text-hitam text-lg font-semibold text-center pb-3">
          Pilih Internet Broadband yang sesuai dengan kebutuhan kamu
        </p>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto md:mx-4 lg:mx-8 max-w-[1420px] snap-mandatory snap-x">
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
