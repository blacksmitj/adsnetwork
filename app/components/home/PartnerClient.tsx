"use client";

import Image from "next/image";

const PartnerClient = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-6">
      <div className="flex flex-col items-center md:px-14">
        <p className="text-hitam text-lg font-semibold text-center pb-3">
          Telah dipercaya industri besar dan digunakan oleh lebih dari 3.000
          pengguna
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8">
        <Image
          alt="person-02"
          height={100}
          width={150}
          style={{ height: "auto" }}
          className="object-contain grayscale opacity-60"
          src="/images/company-01.png"
        />
        <Image
          alt="person-02"
          height={100}
          width={150}
          style={{ height: "auto" }}
          className="object-contain grayscale opacity-60"
          src="/images/company-02.png"
        />
        <Image
          alt="person-03"
          height={100}
          width={150}
          style={{ height: "auto" }}
          className="object-contain grayscale opacity-60"
          src="/images/company-03.png"
        />
        <Image
          alt="person-04"
          height={100}
          width={150}
          style={{ height: "auto" }}
          className="object-contain grayscale opacity-60"
          src="/images/company-04.png"
        />
      </div>
    </div>
  );
};

export default PartnerClient;
