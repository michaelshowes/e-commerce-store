import { Product } from '@/types';
import NoResults from '@/components/ui/NoResults';
import ProductCard from './ui/ProductCard';

type ProductListProps = {
  title: string;
  items: Product[];
};

export default function ProductList({ title, items }: ProductListProps) {
  return (
    <section className={'space-y-4 '}>
      <h3 className={'text-3xl font-bold'}>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div
        className={
          'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }
      >
        {items.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </section>
  );
}
