import { useSetRecoilState } from "recoil"
import { listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState)
  return (nomeParticipante: string) => {
    return setLista(listaAtual => [...listaAtual, nomeParticipante])
  }
}