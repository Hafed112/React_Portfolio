import'./parallax.scss'

const Parallax = ({type}) => {
  return (
    <div className='parallax'
        style={{ background:type==="services" ? "linear-gradient(180deg,#14261B,#80ADBF)" :"linear-gradient(180deg,#80ADBF,#225459)"}}
    >
      <h1>{type ==="services" ? "What I Do?" : "What I Did?"}</h1>
      <div className='mountains'></div>
      <div className='plans'></div>
      <div className='stars'></div>
    </div>
  )
}

export default Parallax
