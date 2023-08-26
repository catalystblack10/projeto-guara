import './styles.css'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EventContext } from '../../contexts/EventContext'

export function EventDetails() {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [img, setImg] = useState("")

    const navigate = useNavigate()
    const { eventos, editarEvento } = useContext(EventContext)
    const { id } = useParams()
    
    const  evento = eventos.find(evento => evento.id === Number(id))
    
    function converterImagem(evento) {
        const reader = new FileReader()
    
        reader.readAsDataURL(evento.target.files[0])
    
        reader.onload = () => {
          setImg(reader.result)
        }
      }

      function handleEditarEvento(eventoDeSubmit) {
        eventoDeSubmit.preventDefault()

        editarEvento({ id, nome, descricao, data, img })
      }

    useEffect(() => {
        if(!evento) {
            navigate('/not-found')
        }
    }, [])

    if(!evento) {
        return <></>
    }

    return (
        <div className='container-detalhes'>
            <img src={evento.img} />
            <div>
                <h1>{evento.nome}</h1>
                <span>{evento.data}</span>
                <p>{evento.descricao}</p>
            </div>

            <form onSubmit={handleEditarEvento}>
            <div>
              <label htmlFor='nome'>Nome</label>
              <input 
                onChange={(evento) => {setNome(evento.target.value)}}
                type='text' 
                id='nome' 
                placeholder='Digite o nome do evento...' 
                />
            </div>
            <div>
              <label htmlFor='descricao'>Descrição</label>
              <input 
                onChange={(evento) => {setDescricao(evento.target.value)}}
                type='text' 
                id='descricao' 
                placeholder='Digite a descricao do evento...' 
                />
            </div>
            <div>
              <label htmlFor='data'>Data</label>
              <input 
                onChange={(evento) => {setData(evento.target.value)}}
                type='datetime-local' 
                id='data' 
                />
            </div>
            <div className='label-imagem'>
              <label htmlFor='imagem'>Selecione a imagem</label>
              <input 
                onChange={converterImagem}
                type='file' 
                id='imagem' />
            </div>
            <div>
              {
                img && <img src={img} /> 
              }
            </div>
            <button>Editar</button>
          </form>
        </div>
    )
}