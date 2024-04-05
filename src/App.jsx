import { useState } from 'react'

import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap-theme.min.css'
import './assets/css/fontAwesome.css'
import './assets/css/hero-slider.css'
import './assets/css/owl-carousel.css'
import './assets/css/templatemo-style.css'

//  import './assets/js/vendor/bootstrap.js'
// import './assets/js/plugins.js'
// import './assets/js/main.js'

import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header></Header>
  )
}

export default App
