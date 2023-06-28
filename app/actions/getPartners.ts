export const partners = [
  {
    title: "APJII",
    url: "company-01.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
  },
  {
    title: "Fiberstar",
    url: "company-02.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
  },
  {
    title: "Bitsnet",
    url: "company-03.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
  },
  {
    title: "Fibertrust",
    url: "company-04.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s."
  }
]

export default function getPartners(
) {
  if (!partners) {
    return null
  }
    return partners;
}