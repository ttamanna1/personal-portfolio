import DP from '../assets/dp.jpg'

const Contact = () => {
  return (
    <section className='contact-section'>
      <h2 className='title'>Contact</h2>
      <img src={DP} alt='Tamanna Khanum'/>
      <div className="contact-div">
        <a href='mailto:tamannakhanum@hotmail.co.uk'>
          <span type='button' className='btn contact-btn'>
            Email me
          </span>
        </a>
      </div>
      
    </section>
  )
}

export default Contact