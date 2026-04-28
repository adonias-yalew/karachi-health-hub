import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './lib/i18n/LanguageContext'
import Home from './routes'
import About from './routes/about'
import Contact from './routes/contact'
import Pricing from './routes/pricing'
import Booking from './routes/booking'
import BlogIndex from './routes/blog/index'
import ServicesIndex from './routes/services/index'
import ServiceDetail from './routes/services/$serviceId'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
