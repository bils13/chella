import Main from './assets/Components/Main/Main'
import Navbar from './assets/Components/Navbar/Navbar'
import UrlBanner from '../src/assets/Image/Banner.svg'
import { StyledBanner } from './assets/Components/UI/Banner.style'

function App() {

  return (
    <div className="App">
      <Navbar />
      <StyledBanner 
        width='100vw'
        backgroundImage={UrlBanner}
        height='270px'
        backgroundRepeat='no-repeat'
        backgroundPosition='center'
        backgroundSize='cover' />
      <Main />
    </div>
  )
}

export default App
