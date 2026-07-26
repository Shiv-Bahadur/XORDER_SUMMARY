import './App.css'
import music_icon from "./assets/icon-music.svg"

function App() {

  return (
    <>
      <main className='main'>
        <div className='container'>
          <div className='bg-image'></div>

          <div className='text-wrapper'>

            <h1 className='heading'>Order Summary</h1>

            <p className='summary-para'>
              You can now listen millions of songs, audiobooks and podcasts on any device anywhere you like!
            </p>

            <div className='plan-text'>
              <div className='icon-plan'>
                <div className='song-icon-container'>
                  <img src={music_icon} alt='' />
                </div>
                <div>
                  <h3>Annual Plan</h3>
                  <p>$59.99/year</p>
                </div>
              </div>

              <a href='#' className='change-link'>Change</a>
            </div>

            <button className='proceed-btn'>Proceed to Payment</button>
            <button className='cancel-order'>Cancel Order</button>

          </div>


        </div>

        <footer>
          Challenge by <a href='https://www.crio.do/'>Crio.do</a> Coded by <a href='https://github.com/Shiv-Bahadur'>Shiv Bahadur</a>
        </footer>

      </main>

    </>
  )
}

export default App
