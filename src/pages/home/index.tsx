import Header from "../../components/header"
import Days from "./Days"

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="w-full px-2">
        <Header/>
        <div className="text-6xl mt-4 font-bold text-text-main">Alireza</div>
        <Days/>
    </div>
  )
}

export default Home