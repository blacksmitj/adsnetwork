import Image from "next/image";

const PartnerClient = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <p className="text-hitam text-lg font-semibold text-center px-8">
        Telah dipercaya industri besar dan digunakan oleh lebih dari 3.000
        pengguna
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8">
        <Image
          alt="person-02"
          height={100}
          width={150}
          className="object-contain grayscale opacity-60"
          src="/images/company-01.png"
        />
        <Image
          alt="person-02"
          height={100}
          width={150}
          className="object-contain grayscale opacity-60"
          src="/images/company-02.png"
        />
        <Image
          alt="person-03"
          height={100}
          width={150}
          className="object-contain grayscale opacity-60"
          src="/images/company-03.png"
        />
        <Image
          alt="person-04"
          height={100}
          width={150}
          className="object-contain grayscale opacity-60"
          src="/images/company-04.png"
        />
      </div>
    </div>
  );
};

export default PartnerClient;
