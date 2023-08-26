import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { EventContext } from '../../contexts/EventContext'
import { Card, CardCarrosel } from './styles'

/* props = {} */

export function EventCard({ evento }) {
    /* if(!props.nome) {
        return 
    } */
    const navigate = useNavigate()

    const { deletarEvento } = useContext(EventContext)

    function navegarParaDetalhes() {
        navigate(`/eventos/${evento.id}`)
    }

    const dataJaPassou = new Date(evento.data).getTime() < new Date().getTime()
    console.log(dataJaPassou)

    return (
        <CardCarrosel dataJaPassou={dataJaPassou}>
            <img src={evento.img} />

            <div className='infos-evento'>
                <h2>{evento.nome}</h2>
                <span>{evento.data}</span>
                <p>{evento.descricao}</p>
                <button onClick={() => deletarEvento(evento.id)}>Deletar</button>
                <button onClick={navegarParaDetalhes}>Ver detalhes do evento</button>
            </div>
        </CardCarrosel>
    )
}