'use client';

import { useState } from "react";

interface Props {
    valorInicial: number
}

export default function Contador(props: Props) {

    const [numero, setNumero] = useState(props.valorInicial);



    function incrementar() {
        setNumero(numero + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
    }


    return (
        <div>
            <h1>Contador {numero}</h1>
            <div className="flex flex-col gap-2">
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            </div>
        </div>
    );
}