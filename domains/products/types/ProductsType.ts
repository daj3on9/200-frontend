export type Brand = { id: string; name: string };

export type Product = {
  id: string;
  brand: string;
  title: string;
  pricePerDay: number;
  imageUrl: string;
  reservable: boolean;
};
