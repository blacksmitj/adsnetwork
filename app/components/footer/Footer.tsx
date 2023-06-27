import Image from "next/image";
import Container from "../Container";
import Logo from "../navbar/Logo";

const Footer = () => {
  return (
    <div className="bg-white py-24 px-8">
      <Container>
        <div className="flex md:flex-row flex-col gap-16">
          <div className="flex-1 flex flex-col gap-8 pr-14">
            <Image
              alt="Logo"
              className="block"
              height="80"
              width="160"
              src="/images/ads-logo.png"
            />
            <p className="text-hitam leading-relaxed md:text-lg font-light">
              PT. Adhelin Data Solution dengan Branding ADSnet merupakan suatu
              perusahaan yang berasaskan Teamwork yang didukung para personel
              yang berpengalaman dalam berbagai development.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-bold text-hitam text-lg">LAYANAN</h3>
            <ul className="flex flex-col gap-4 text-oren">
              <li>Internet Broadband</li>
              <li>Internet Dedicated</li>
              <li>IP CCTV</li>
              <li>Web Development</li>
              <li>Data Center</li>
              <li>IT Konsultan</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-bold text-hitam text-lg">KONTAK KAMI</h3>
            <ul className="flex flex-col gap-4 text-hitam">
              <li>
                <p>Telpon</p>
                <span className="font-bold">0265-266 7186</span>
              </li>
              <li>
                <p>Whatsapp</p>
                <span className="font-bold">0812-2022-1289</span>
              </li>
              <li>
                <p>Email</p>
                <span className="font-bold">Info@adsnetwork.co.id</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
