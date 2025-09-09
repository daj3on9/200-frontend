import { getImageUrl } from '@/domains/common/utils/image';
import { Product } from '@/domains/products/types/ProductsType';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block cursor-pointer"
    >
      <div className="overflow-hidden bg-white">
        <div className="relative w-full aspect-square">
          <Image
            className="self-stretch"
            src={getImageUrl(product.thumbnailImageUrl)}
            alt={product.name}
            width={195}
            height={195}
            unoptimized
          />
        </div>
        <div className="self-stretch p-3 bg-Static-White flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col justify-start items-start">
            <div className="justify-start text-Label-Alternative body3-m">
              {product.brand}
            </div>
            <div className="w-40 justify-start text-Label-Normal title1-b truncate">
              {product.name}
            </div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="justify-start text-Label-Alternative body3-r">
              하루 체험 금액
            </div>
            <div className="flex justify-start items-center">
              <div className="justify-start text-Label-Normal title2-b">
                {product.dailyRentalPrice.toLocaleString()}원
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
