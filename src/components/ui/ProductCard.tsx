'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

import IconButton from './IconButton';
import Currency from './Currency';
import usePreviewModal from '@/hooks/usePreviewModal';
import { Product } from '@/types';
import useCart from '@/hooks/useCart';

type ProductCard = {
  data: Product;
};

export default function ProductCard({ data }: ProductCard) {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      className={
        'group cursor-pointer space-y-4 rounded-xl border bg-white p-3'
      }
    >
      <div
        onClick={handleClick}
        className={'relative aspect-square rounded-xl bg-gray-100'}
      >
        <Image
          src={data?.images?.[0].url}
          alt={data.name}
          fill
          className={'aspect-square rounded-md object-cover'}
        />
        <div
          className={
            'absolute bottom-5 w-full p-6 opacity-0 transition group-hover:opacity-100'
          }
        >
          <div className={'flex justify-center gap-x-6'}>
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className={'text-gray-600'}
                />
              }
            />
            <IconButton
              onClick={onAddToCart}
              icon={
                <ShoppingCart
                  size={20}
                  className={'text-gray-600'}
                />
              }
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className={'text-lg font-semibold'}>{data.name}</p>
        <p className={'text-sm text-gray-500'}>{data.category.name}</p>
      </div>

      {/* Price */}
      <div className={'flex items-center justify-between'}>
        <Currency value={data?.price} />
      </div>
    </div>
  );
}
