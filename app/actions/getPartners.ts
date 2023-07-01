export const partners = [
  {
    title: "APJII",
    url: "company-01.png",
    description: "berperan dalam mendorong pertumbuhan ekonomi digital, inovasi teknologi, dan konektivitas internet yang lebih luas di Indonesia untuk memanfaatkan potensi internet secara optimal dalam berbagai aspek kehidupan."
  },
  {
    title: "Fiberstar",
    url: "company-02.png",
    description: "adalah perusahaan penyedia layanan internet berkecepatan tinggi di Indonesia. Mereka mengkhususkan diri dalam menyediakan koneksi internet berbasis serat optik, yang dikenal sebagai teknologi fiber optic."
  },
  {
    title: "Bitsnet",
    url: "company-03.png",
    description: "adalah kesempatan untuk berinteraksi dan membuat hal-hal menjadi mungkin bagi klien kami. Oleh karena itu, budaya kami melampaui sekadar pelayanan hingga mencakup keterlibatan dan keterikatan total dengan klien. Pusat kontak kami siap 24 jam setiap hari untuk kehandalan yang dapat diandalkan."
  },
  {
    title: "Fibertrust",
    url: "company-04.png",
    description: "Sekarang kita memasuki era digital dimana kita dapat mengakses setiap kemudahan dalam beraktivitas, seperti streaming online, meeting, upload dan download serta hal - hal lainnya yang kamu lakukan secara online."
  }
]

export default function getPartners(
) {
  if (!partners) {
    return null
  }
    return partners;
}