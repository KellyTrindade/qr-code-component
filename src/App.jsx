import './App.css'
import Card from './components/Card'

import qrCode from './assets/image-qr-code.png'

function App() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Card
        image={qrCode}
        imgTitle='QR Code do desafio'
        title='Aprimore suas habilidades de frontend criando projetos'
        description='Escanei o QR Code para visitar o Frontend Mentor e levar suas habilidades de programação para o próximo nível.'
      />
    </div>
  )
}

export default App
