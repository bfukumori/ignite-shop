import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/future/image';
import logo from '../assets/logo.svg';
import { HeaderContainer } from '../styles/header';
import { Cart } from './Cart';
import { CartModal } from './CartModal';

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt='' />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div>
            <Cart isHeader />
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content asChild>
            <div>
              <CartModal />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContainer>
  );
}
