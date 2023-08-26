import './styles.css'
import { NavLink } from 'react-router-dom'

export function NotFound() {
    return (
        <>
         <h1>Oops... Página não encontrada</h1>
         <NavLink className="goback-link" to="/">Voltar para a pagina inicial</NavLink>
        </>
    )

}