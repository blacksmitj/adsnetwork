import Image from "next/image";

const Maps = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className=" md:mx-16 mx-8 flex md:flex-row flex-col bg-white shadow-oren/20 shadow-2xl rounded-xl overflow-hidden">
        <div className="md:w-1/2">
          <Image
            width={628}
            height={397}
            src={"/images/map.png"}
            alt="map"
            className="bg-cover"
          />
        </div>
        <div className="flex flex-col justify-start p-6 md:w-1/2 gap-4 text-hitam">
          <h1 className="text-4xl font-bold">PT. Adhelin Data Solution</h1>
          <p className=" ">
            Jalan Raya Pangandaran No 200 Dusun Babakan Jaya RT 19 RW 07 Desa
            Kedungwuluh Kecamatan Padaherang Kab Pangandaran
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maps;
