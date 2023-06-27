"use client";

import getServices from "../actions/getServices";
import Breadcumbs from "../components/Breadcumbs";
import Heading from "../components/Heading";
import Service from "../components/Service";
import Products from "../components/home/Products";

const ServicesClient = () => {
  const services = getServices();

  return (
    <div>
      <Breadcumbs levelOne="Layanan" />
      <div className="flex flex-col gap-24 mt-16 mb-24 max-w-[1200px] mx-auto">
        <div className="md:px-8 lg:px-16 px-4 lg:w-3/4 w-4/5">
          <Heading
            title="Gabung Bersama Kami Untuk Menemukan solusi Internet Anda"
            subtitle="Internet Broadband untuk menghubungkan Komputer, Ponsel dan Perangkat lain di rumah Anda"
          />
        </div>
        <div className="md:px-8 lg:px-16 px-4">
          <div className="relative flex flex-row gap-4 overflow-x-auto overflow-y-visible snap-x px-4">
            {services?.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                color={service.color}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default ServicesClient;
