import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';
import { Image as ImageType } from '@/types';
import Image from 'next/image';

type GalleryTabProps = {
  image: ImageType;
};

export default function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab
      className={
        'relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'
      }
    >
      {({ selected }) => (
        <div>
          <span
            className={
              'absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md'
            }
          >
            <Image
              src={image.url}
              alt={''}
              fill
              className={'object-cover object-center'}
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 aspect-square rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
}
