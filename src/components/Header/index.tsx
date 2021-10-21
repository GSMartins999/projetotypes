import * as S from './styles'
import logo from 'assets/img/logo site.png'

const Header = () => {
   return (

   <S.Header> 

      <picture>
         
         <img src= {logo} alt="Logo do site"/>
      
      </picture>

      <section>

         <h1> Motos e Peças </h1>

      </section>
   
   </S.Header>

   )
}

export default Header 