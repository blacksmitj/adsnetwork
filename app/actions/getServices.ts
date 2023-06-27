import { AiOutlineCode, AiOutlineDatabase } from "react-icons/ai";
import { BsBroadcast, BsCameraVideo, BsFillWebcamFill, BsSpeedometer2 } from "react-icons/bs";

export const services = [
  {
    title: "Internet Broadband",
    slug: "internet-broadband",
    color: "oren",
    icon: BsBroadcast,
    description: "Hadapi era digital dengan kecepatan luar biasa! Nikmati koneksi internet super cepat dan stabil dengan layanan Internet Broadband kami."
  },
  {
    title: "Internet Dedicated",
    slug: "internet-dedicated",
    color: "biru",
    icon: BsSpeedometer2,
    description: "Koneksi internet eksklusif dan andal yang memberikanmu performa maksimal dalam berbagai aktivitas online!"
  },
  {
    title: "IP CCTV",
    slug: "ip-cctv",
    color: "kuning",
    icon: BsFillWebcamFill,
    description: "Lindungi properti dan jaga keamananmu dengan teknologi CCTV IP terdepan!"
  },
  {
    title: "Web Development",
    slug: "web-development",
    color: "oren",
    icon: AiOutlineCode,
    description: "Kembangkan situs web yang menarik dan fungsional dengan tim ahli kami untuk menginspirasi dan mencapai kesuksesan secara online!"
  },
  {
    title: "Data Center",
    slug: "data-center",
    color: "pink",
    icon: AiOutlineDatabase,
    description: "Jadilah mitra dalam kesuksesan teknologi dengan konsultan IT yang berpengalaman untuk mewujudkan visi digital Anda."
  },
]

export default function getServices(
) {
  if (!services) {
    return null
  }
    return services;
}