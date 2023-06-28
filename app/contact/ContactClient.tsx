import Breadcumbs from "../components/Breadcumbs";
import Heading from "../components/Heading";
import Maps from "../components/home/Maps";

const ContactClient = () => {
  return (
    <>
      <Breadcumbs levelOne="Kontak" />
      <div className="flex flex-col gap-24 mt-16 mb-24 max-w-[1200px] mx-auto">
        <div className="md:px-8 lg:px-16 px-4 lg:w-2/3 w-4/5">
          <Heading title="Hubungi Kami" />
        </div>
        <div className="md:px-8 lg:px-16 px-4">
          <div className="flex flex-row gap-8">
            <div className="">form</div>
            <div className="">detail contact</div>
          </div>
        </div>
        <Maps />
      </div>
    </>
  );
};

export default ContactClient;
