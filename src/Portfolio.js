import './App.css'

const firstCard = {
  img: 'https://unsplash.it/200/200',
  caption: 'this is an image',
}
const secondCard = {
  img: 'https://unsplash.it/201/200',
  caption: 'this is an image too',
}
const thirdCard = {
  img: 'https://unsplash.it/200/201',
  caption: 'this is an image also',
}

// this is rendering to the DOM
function App() {
  return (
    <section className='gallery'>
      <Gallery img={firstCard.img} caption={firstCard.caption} />
      <Gallery img={secondCard.img} caption={secondCard.caption} />
      <Gallery img={thirdCard.img} caption={thirdCard.caption} />
    </section>
  )
}

// work below this line!!!

const Gallery = ({ img, caption }) => {
  // const { img, caption } = props
  return (
    <article className='card gallery-item p-2'>
      <img src={img} alt='' className="rounded" />
      <h3 className='text-center p-2'>{caption}</h3>
    </article>
  )
}

export default App
