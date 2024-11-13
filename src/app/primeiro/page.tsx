import Botao from "@/components/botao";
import Pagina from "@/components/template/Pagina";

export default function PrimeiraPagina() {
    return (
      <Pagina>
        <div className="flex flex-col gap-2 p-3">
          <Botao label="jose" qtd={3}/>
          <Botao label="bela" />
          <Botao label="Maria" />
        </div>
      </Pagina>
    )
}