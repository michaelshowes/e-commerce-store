import Container from '@/components/ui/Container';
import Link from 'next/link';
import MainNav from '@/components/MainNav';
import { getCategories } from '@/actions/getCategories';
import NavbarActions from './NavbarActions';

export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className={'border-b'}>
      <Container>
        <div className={'relative flex h-16 items-center px-4 sm:px-6'}>
          <Link
            href={'/'}
            className={'ml-4 flex gap-x-2 lg:ml-0'}
          >
            <p className={'text-xl font-bold'}>STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
}
