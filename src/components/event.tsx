import Image from "next/image";
import mad from '../mockdata/mad.jpg'

export default function Event(...props) {


  console.log(props[0]);

  return (
    <div className="shadow relative p-10 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="my-12 px-6" style={{color: props[0].themeColor.foreground}}>
          <div className="text-4xl md:text-8xl font-semibold">{props[0].data.date[0].day}</div>
          <div className="text-xl md:text-2xl font-light">{props[0].data.date[0].month}</div>
        </div>

        <div className="relative">
          <Image src={mad} width="500" height="auto" sizes="(max-width: 768px) 100vw" alt="Compact" className="rounded-br-xl" />
          <div className="absolute top-0 right-0 rounded-bl-lg px-3 py-1" style={{backgroundColor: props[0].themeColor.foreground, color: props[0].themeColor.background}}>{props[0].data.exerpt}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 relative" style={{marginTop: "calc(-6rem + 1.5rem)"}}>
        <div className="max-w-sm rounded-tr-lg" style={{backgroundColor: props[0].themeColor.background, color: props[0].themeColor.foreground}}>
          <div className="max-w-sm p-6 relative overflow-hidden rounded-tr-lg" >
            <h1 className="text-lg font-semibold mb-4">{props[0].data.title}</h1>
            <p className="mb-4 line-clamp-6">{props[0].data.description}</p>
            <p className="font-semibold">Pris: {props[0].data.price} kr.</p>
          </div>
        </div>

        <div className="p-6 pt-24">
          <p className="mb-4 font-semibold">{props[0].data.startTime}</p>
          <p className="mb-4 font-semibold">27. maj - 13. oktober</p>
          <p className="mb-0 font-semibold">{props[0].data.organizer}</p>
          <p>{props[0].data.address}</p>
        </div>
      </div>

      <div className="flex place-content-center py-4">
        <a href={props[0].data.linkSrc} className="underline hover:decoration-2">Se mere om dette arrangement</a>
      </div>
    </div>
  )
}
