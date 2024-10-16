export default function Home() {
  return (
    <main>
      <nav className="h-[3rem] flex w-full sticky top-0 bg-white border-b-cinza border-b-2">
        <ul className="flex justify-evenly w-full items-center">
          <li><a href="#sec1" className="text-azul font-bold  px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]" >Nosso serviço</a></li>
          <li><a href="#sec2" className="text-azul font-bold  px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]" >FAQ</a></li>
          <li><a href="#sec3" className="text-azul font-bold  px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]" >Oficinas próximas</a></li>
          <li><a href="#sec4" className="text-azul font-bold  px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]" >Relatar problema</a></li>
          <li><a href="#sec5" className="text-azul font-bold  px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]" >Integrantes</a></li>
        </ul>
      </nav>
      <div className="flex flex-col w-full ">
        <div className="w-full bg-red-500 min-h-[calc(100vh-7rem)]">sec1</div>
        <div id="sec2" className="w-full bg-green-500 min-h-[calc(100vh-3rem)]">sec2</div>
        <div id="sec3" className="w-full min-h-[calc(100vh-3rem)]">sec3</div>
        <div id="sec4" className="w-full bg-green-500 min-h-[calc(100vh-3rem)]">sec5</div>
        <div id="sec5" className="w-full min-h-[calc(100vh-3rem)]">sec5</div>
      </div>
    </main>
  );
}
