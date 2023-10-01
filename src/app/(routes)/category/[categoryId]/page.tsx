import { getCategory } from '@/actions/getCategory';
import { getColors } from '@/actions/getColors';
import { getProducts } from '@/actions/getProducts';
import { getSizes } from '@/actions/getSizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/Container';
import NoResults from '@/components/ui/NoResults';
import Filter from './components/Filter';
import ProductCard from '@/components/ui/ProductCard';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

export default async function CategoryPage({
  params,
  searchParams
}: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className={'bg-white'}>
      <Container>
        <Billboard data={category.billboard} />
        <div className={'px-4 pb-24 sm:px-6 lg:px-8'}>
          <div className={'lg:grid lg:grid-cols-5 lg:gap-x-8'}>
            <MobileFilters
              sizes={sizes}
              colors={colors}
            />
            <div className={'hidden lg:block'}>
              <Filter
                valueKey={'sizeId'}
                name={'Sizes'}
                data={sizes}
              />
              <Filter
                valueKey={'colorId'}
                name={'Colors'}
                data={colors}
              />
            </div>
            <div className={'mt-6 lg:col-span-4 lg:mt-0'}>
              {products.length === 0 && <NoResults />}
              <div
                className={
                  'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'
                }
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    data={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
