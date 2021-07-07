import './App.css'

const firstCard = {
  img: 'https://unsplash.it/200/200',
  caption: 'this is an image',
}
const secondCard = {
  img: 'https://unsplash.it/201/200',
  caption: 'this is an image too',
}

// this is rendering to the DOM
function App() {
  return (
    <section className='gallery'>
      <Gallery img={firstCard.img} caption={firstCard.caption} />
      <Gallery img={secondCard.img} caption={secondCard.caption} />
    </section>
  )
}

// work below this line!!!

const Gallery = ({ img, caption }) => {
  // const { img, caption } = props
  return (
    <article className='gallery-item'>
      <img src={img} alt='' />
      <h1>{caption}</h1>
    </article>
  )
}

export default App
