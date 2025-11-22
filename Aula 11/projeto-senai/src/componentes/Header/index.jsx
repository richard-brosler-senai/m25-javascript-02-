import LogoSenai from './assets/logo-senai.png';
import MenuHamburger from './assets/menu.svg';
import Login from './assets/login.svg';
import Pesquisa from './assets/search.svg';
import './styles.css';

export default function Header(){
    return (
        <div className='cabecalho'>
            <span className='icon-hamburger'></span>
            <img src={LogoSenai} alt="Logotipo do Senai" />
            <img src={Login} alt="Imagem do Login" />
            <img src={Pesquisa} alt="Imagem da Pesquisa" />
        </div>
    );
}