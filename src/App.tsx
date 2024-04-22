
import './App.css'
import start from './assets/images/icon-star.svg'
import FaqList from './components/FaqList'
function App() {
  // import image from './assets/images/icon-star.svg'

  return (
    <>
      <main className='grid grid-row-6 bg-light w-full min-h-screen'>
      <section className="bg-[url('./assets/images/background-pattern-desktop.svg')] row-span-3 bg-[url('./assets/images/background-pattern-desktop.svg') bg-cover w-full"></section>
      <section className='row-span-3 bg-myCustomColor'>
        <div className="relative bg-white shadow-md rounded-lg z-20 mx-auto top-[-6.6rem] px-6 py-6 w-[90%] max-w-[720px]">
          <div className="flex items-center gap-6 mb-6 py-2 text-primary">
            <img src={start} />
            <h1 className='font-bold text-6xl'>FAQs</h1>
          </div>
          <FaqList/>
        </div>

      </section>
      </main>
    </>
  )
}

export default App
