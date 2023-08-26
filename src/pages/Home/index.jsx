import './styles.css'; 
import { EventCard } from '../../components/EventCard';
import { useState, useContext } from 'react'; /* mudei aq */
import { EventContext } from '../../contexts/EventContext';  /* mudei aq */

export function HomePage() {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState("")
  const [img, setImg] = useState("")

  const { eventos, criarEvento } = useContext(EventContext)

  function converterImagem(evento) {
    const reader = new FileReader()

    reader.readAsDataURL(evento.target.files[0])

    reader.onload = () => {
      setImg(reader.result)
    }
  }
 
  function handleCriarEvento(eventoDeSubmit) {
    eventoDeSubmit.preventDefault()

    criarEvento({ nome, descricao, data, img })
  }
 
  return (
    <>
      <div className="App">
        <h1>Crie momentos que vão ficar na memória</h1>

        <section className='container'>

          <form onSubmit={handleCriarEvento}>
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
            <div className='preview-imagem'>
              {
                img && <img src={img} /> 
              }
            </div>
            <button>Cadastrar</button>
          </form>

          <div className='eventos'>
            {
              eventos.map(evento => {
                return (
                    <EventCard 
                      key={evento.id}
                      evento={evento}
                    />
                )
              })
            }
          </div>

        </section>
      </div>
    </>
  );
}

