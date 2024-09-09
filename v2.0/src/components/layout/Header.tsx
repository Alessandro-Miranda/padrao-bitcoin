
import { Logo } from '@Components/ui/Logo';
import { CountrySelector } from './CountrySelector';


export function Header() {
  return (
    <header className="heading">
      <div className="d-flex align-items-center justify-content-between container">
        <Logo />
        <nav className="heading-menu ms-0 ms-lg-4 ">
          <ul className="d-lg-flex align-items-center">
            <li><a className="heading-link text-sm" href="#sobre-nos">Sobre Nós</a></li>
            <li><a className="heading-link text-sm" href="#solucoes">Nossas Soluções</a></li>
            <li><a className="heading-link text-sm" href="#servicos">Serviços</a></li>
            <li><a className="heading-link text-sm" href="#contato">Contato</a></li>
          </ul>
        </nav>
          <CountrySelector />
      </div>
    </header>
  );
}