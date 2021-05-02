import Link from 'next/link'

const Footer = () => {

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>

      <div className="hidden sm:block flex justify-center w-full min-h-16 bg-gray text-coffee text-xs xl:text-sm pt-2">
        <div className="flex xl:w-11/12 mx-auto">
          <div className="flex items-center mx-8 pb-2">
            <img className="h-8" src="/assets/img/ssl.png" alt="zdjęcie" />
          </div>
          <div style={{ fontFamily: "Roboto Condensed" }} className="flex sm:flex-row justify-between text-center leading-16 mx-auto">
            <div className="mx-8">Radca Prawny Łukasz Szczepaniak</div>
            <div className="mx-8">Kancelaria Radcy Prawnego</div>
            <Link href="/polityka">
              <div className="mx-8 cursor-pointer hover:underline transition duration-300">Polityka prywatności</div>
            </Link>
            <div className="mx-8">© Wszelkie prawa zastrzeżone</div>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full flex justify-center min-h-16 py-1 bg-gray text-coffee text-xs">
        <div className="w-11/12">
          <div style={{ fontFamily: "Roboto Condensed" }} className="flex flex-row my-2">
            <div className="flex flex-col w-1/2 text-center">
              <div className="">Radca Prawny Łukasz Szczepaniak</div>
              <div className="">Kancelaria Radcy Prawnego</div>
            </div>
            <div className="flex flex-col w-1/2 text-center">
              <div className="">© Wszelkie prawa zastrzeżone</div>
              <Link href="/polityka">
                <div className=" cursor-pointer hover:underline transition duration-300">Polityka prywatności</div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center my-1">
            <img className="h-6" src="/assets/img/ssl.png" alt="zdjęcie" />
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer