import { getBillboard } from '@/actions/getBillboard';
import { getProducts } from '@/actions/getProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('2253344d-2794-40b3-9baa-fc77e8415f8c');

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
