
interface Props {
    label: String,
    qtd?: number
}

export default function Botao (props: Props){
    return <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-400">Clique aqui {props.label} {props.qtd}</a>
}

