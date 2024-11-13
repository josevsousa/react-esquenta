import Link from "next/link";

export default function Menu(props: any){
    return (
        <aside className="w-72 bg-zinc-800">
            <nav className="flex flex-col gap-2 p-4">
                <Link href="/">Inicio</Link>
                <Link href="/primeiro">Primeiro</Link>
                <Link href="/segundo">Segundo</Link>
            </nav>
        </aside>  
    )
}