import { useEffect, useState } from "react";
import { API } from "../api";
import Kartica2 from "./Kartica2";
import "../App.css"

function Info(props) {
  const [usaInfo, setUsaInfo] = useState([]);
  useEffect(() => {
    const nesto = async () => {
      try {
        const result = await API.get();
        setUsaInfo(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    nesto();
  }, []);
  return (
    <div className="Big">
      {usaInfo.map((el, index) => {
        return (
          <Kartica2
            Id_state={el["ID State"]}
            State={el["State"]}
            Id_year={el["ID Year"]}
            Year={el["Year"]}
            Population={el["Population"]}
            Slug_state={el["Slug State"]}
          />
        );
      })}
    </div>
  );
}
export default Info;
