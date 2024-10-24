import { BrowserRouter,Routes,Route } from "react-router-dom"
import{LandingPage,About,Services,Contact,SignIn,SignUp} from "./pages/index"

function App() {

  return (
    <div className="bg-[#F0F0F0] overflow-auto">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<Contact />} />
         <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
