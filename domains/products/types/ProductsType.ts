export type Brand = { id: string; name: string };

export type Product = {
  id: string;
  brandId: string;
  brandName: string;
  title: string;
  pricePerDay: number;
  imageUrl: string;
  reservable: boolean;
};
