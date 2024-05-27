import { type ReactNode } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface HeaderProps {
  image: ImageData;
  children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />{' '}
      {/*We can use like this because we have the same name...src and alt */}
      {children}
    </header>
  );
};

export default Header;
