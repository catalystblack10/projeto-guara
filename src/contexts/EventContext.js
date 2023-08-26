import { createContext, useEffect, useState } from "react";
import { eventosEstaticos } from '../data/eventos';

export const EventContext = createContext({})

export function EventContextProvider({ children }) {
    const estadoDoNavegador = JSON.parse(localStorage.getItem("eventos:707"))
    const [eventos, setEventos] = useState(estadoDoNavegador ?? eventosEstaticos)

    function criarEvento(dadosEvento) {
        //e.preventDefault()
        const id = eventos.length + 1
    
        const novoEvento = {
          id,
          nome: dadosEvento.nome,
          data: dadosEvento.data,
          img: dadosEvento.img,
          descricao: dadosEvento.descricao
        }
    
        setEventos([...eventos, novoEvento]) 
    }

    function editarEvento(dadosEvento) {
      const eventosAtualizados = eventos.map(evento => {
        if(evento.id === Number(dadosEvento.id)) {
          return {
            id: evento.id,
            nome: dadosEvento.nome ? dadosEvento.nome : evento.nome,
            data: dadosEvento.data ? dadosEvento.data : evento.data,
            descricao: dadosEvento.descricao ? dadosEvento.descricao : evento.descricao,
            img: dadosEvento.img ? dadosEvento.img : evento.img
          }
        }

        return evento
      })

      setEventos(eventosAtualizados)
    }
    
  function deletarEvento(id) {
    const confirm = window.confirm("Tem certeza de que deseja deletar o evento?")
    
    if(!confirm) {
      return
    }
    
    const eventosAtualizados = eventos.filter(evento => evento.id !== Number(id))
    
    setEventos(eventosAtualizados)
  }
  
  useEffect(() => {
    //localStorage.setItem("eventos:707", JSON.stringify(eventos))
  }, [eventos])

    return (
        <EventContext.Provider value={{
            eventos,
            criarEvento,
            deletarEvento,
            editarEvento
        }}>
            { children }
        </EventContext.Provider>
    )
}

/* 
    <EventContextProvider>
        <Router />
    </EventContextProvider>

*/