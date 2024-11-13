
import { IconBrandReact } from '@tabler/icons-react';

export default function Cabecalho(props: any){
    return (
        <header className="flex justify-between items-center bg-zinc-700 p-6">
            <div className='flex flex-row items-center gap-2'>
                <IconBrandReact size={30} />
                <span>Logo do app</span>
            </div>
            
            <div className="flex justify-center items-center w-12 h-12 bg-purple-800 rounded-full p-2">US</div>
        </header>
    )
}