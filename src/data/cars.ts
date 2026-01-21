export interface Car {
  id: string;
  brand: string;
  model: string;
  name: string;
  year: number;
  modelYear: number;
  price: string;
  km: string;
  color: string;
  fuel: string;
  armored: boolean;
  bodyType: string;
  image: string;
  link: string;
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "Renault",
    model: "Gol",
    name: "Renault Logan",
    year: 2021,
    modelYear: 2021,
    price: "R$ 56.900",
    km: "48.200 km",
    color: "Prata",
    fuel: "Flex",
    armored: false,
    bodyType: "Hatch",
    image: "/assets/renault-logan.jpeg",
    link: "/seminovos/gol-16-360",
  },
  {
    id: "2",
    brand: "Nissan",
    model: "Argo",
    name: "Nissan Kicks Active CVL",
    year: 2022,
    modelYear: 2022,
    price: "R$ 72.500",
    km: "32.000 km",
    color: "Branco",
    fuel: "Flex",
    armored: false,
    bodyType: "Hatch",
    image: "/assets/nissan-kicks.jpeg",
    link: "/seminovos/argo-10-930",
  },
  {
    id: "3",
    brand: "Renault",
    model: "Siena",
    name: "Renault Kardian Tech",
    year: 2014,
    modelYear: 2014,
    price: "R$ 28.900",
    km: "89.000 km",
    color: "Cinza",
    fuel: "Flex",
    armored: false,
    bodyType: "Sedan",
    image: "/assets/renault-kardian-tech.jpeg",
    link: "/seminovos/siena-el-10-825",
  },
  {
    id: "4",
    brand: "Toyota",
    model: "Corolla",
    name: "Toyota Corolla XEi 2.0",
    year: 2020,
    modelYear: 2021,
    price: "R$ 118.900",
    km: "61.000 km",
    color: "Preto",
    fuel: "Flex",
    armored: false,
    bodyType: "Sedan",
    image: "/assets/toyota-corolla-xei.jpeg",
    link: "/seminovos/corolla-xei-2021",
  },
];
