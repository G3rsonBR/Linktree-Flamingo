interface LinkProps {
  url: string,
  icon: string,
  text: string
}

function Link ({url, icon, text}: LinkProps) {
  return (
    <a href={url} className='w-11/12 sm:w-96 flex items-center p-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded' target='_blank'>
      <img src={icon} alt="icon" className='w-8' />
      <h3 className='flex-1 text-center'>{text}</h3>
    </a>
  )
}

export default function App() {

  return (
    <main className='bg-zinc-950 text-zinc-50'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <img src="https://github.com/G3rsonBR.png" alt="Foto de perfil" className='mb-2 w-64 rounded-full border-4 border-zinc-950'/>
        <section id="content" className='flex items-center flex-col gap-2 w-full sm:w-96'>
          <h1 className='text-xl font-bold'>@G3rsonBR</h1>
          <h2 className='text-zinc-300 font-medium'>Front-end Developer and UI/UX</h2>
          <Link url='https://github.com/G3rsonBR' icon="./github.png" text='/G3rsonBR'/>
          <Link url='https://linkedin.com/in/br-gerson' icon="./linkedin.png" text='/in/br-gerson'/>
          <Link url='https://mail.google.com/mail/u/0/?fs=1&to=gersons.br13@gmail.com&su=&tf=cm' icon="./mail.png" text='gersons.br13@gmail.com'/>
        </section>
      </div>
    </main>
  )
}