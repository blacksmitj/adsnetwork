"use client";

import getPartners from "../actions/getPartners";
import Breadcumbs from "../components/Breadcumbs";
import Heading from "../components/Heading";
import Partner from "../components/Partner";

const PartnersClient = () => {
  const partners = getPartners();

  return (
    <>
      <Breadcumbs levelOne="Partner & Client" />
      <div className="flex flex-col gap-24 mt-16 mb-24 max-w-[1200px] mx-auto">
        <div className="md:px-8 lg:px-16 px-4 lg:w-3/4 w-4/5">
          <Heading
            title="Dipercaya lebih dari ribuan pelanggan, serta korporasi skala kecil sampai besar"
            subtitle="Beberapa perusahaan yang telah bekerja sama dengan kami"
          />
        </div>
        <div className="md:px-8 lg:px-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners?.map((partner, index) => (
              <Partner
                key={index}
                title={partner.title}
                url={partner.url}
                description={partner.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersClient;
