import { Logo } from '@Components/ui/Logo';
import { CountrySelector } from './CountrySelector';

export function Header() {
  return (
    <header className="heading">
      <div className="d-flex align-items-center justify-content-between container">
        <Logo />
        <nav className="heading-menu ms-0 ms-lg-4 ">
          <ul className="d-lg-flex align-items-center">
            {
              [
                { text: 'Sobre Nós', href: '#sobre-nos' },
                { text: 'Nossas Soluções', href: '#solucoes' },
                { text: 'Serviços', href: '#servicos' },
                { text: 'Contato', href: '#contato' }
              ].map(({ href, text }) => (
                <ListItem key={text} text={text} href={href} />
              ))
            }
          </ul>
        </nav>
        <CountrySelector />
      </div>
    </header>
  );
}

type ListItemProps = {
  text: string;
  href?: string;
}

function ListItem({ text, href }: ListItemProps) {
  return (
    <li>
      <a className="heading-link text-sm" href={href}>
        {text}
      </a>
    </li>
  );
}