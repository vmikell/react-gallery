const Test = () => {
  return (
    <div className='test'>
      <div className='test-card'>
        <div className='img-div'>
        <img src="http://unsplash.it/200/200" alt="" />
        </div>
        <div className='card-text'>
          <h3>{card.[0].title}</h3>
          <p>{card.[0].text}</p>
        </div>
      </div>
    </div>
  )
}


const card = [{
    title: 'my first component',
    text: 'some text'
  }]
  


export default Test
