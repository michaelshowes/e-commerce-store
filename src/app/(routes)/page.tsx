import { getBillboard } from '@/actions/getBillboard';
import { getProducts } from '@/actions/getProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('0df0bd75-d43e-4b66-94a9-02bd016e1331');

  return (
    <Container>
      <div className={'scroll-py-10 pb-10'}>
        <Billboard data={billboard} />
        <div className={'flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'}>
          <ProductList
            title={'Featured Products'}
            items={products}
          />
        </div>
      </div>
    </Container>
  );
}
