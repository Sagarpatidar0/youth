import Btns from '../components/btns/Btns'
import Footer from '../components/footer/Footer'
import Lines from '../components/lines/Lines'
import Main from '../components/main/Main'
import Navbar from '../components/navbar/Navbar'
import Roadmap from '../components/roadmap/Roadmap'
import Signup from '../components/signup/Signup'
import Table from '../components/table/Table'

export default function Home() {
  return (
    <>
    <Btns />
    <Navbar />
    <Main />
    <Lines />
    <Roadmap />
    <Table />
    <Signup />
    <Footer />
    </>
  )
}
