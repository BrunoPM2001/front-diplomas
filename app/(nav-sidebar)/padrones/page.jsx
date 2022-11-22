import Resultados from "../../../components/padrones/resultados";
import SearchPadron from "../../../components/padrones/search";

export default function Page () {
  return (
    <div className="bodyContent">
      <SearchPadron/>
      <Resultados/>
    </div>
  )
}