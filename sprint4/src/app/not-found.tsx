import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
<div className='flex gap-4'>
<Image
          src="/logo-porto.svg"
          alt="Logo Porto Seguro"
          width={32}
          height={32}
        />
      <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
  </div>    
      <p className="mt-4 text-lg">
        A página que você está procurando não existe.
      </p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
