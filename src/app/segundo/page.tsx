import Contador from "@/components/contador";
import Pagina from "@/components/template/Pagina";

export default function SegundaPagina(){
    return (  
        <Pagina>
            <div className="flex flex-col gap-2 p-3">
                <h1>Segunda Pagina Contador</h1>
                <Contador valorInicial={10} />
                <Contador valorInicial={20} />
                <Contador valorInicial={30} />
            </div>
        </Pagina>
    )  
}