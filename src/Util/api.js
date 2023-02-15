import { useEffect, useState } from "react";
import axios from "axios";
export const apiURL = "https://restcountries.com/v3.1/all";

const useFetchData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(apiURL);
        // var arr = response.map((item) => {
        //   return {
        //     name: item.name.common,
        //     continent: item.region,
        //     flag: item.flags.png,
        //     capital: item.capital[0] ? item.capital[0] : "",
        //     currencies: item.currencies ? item.currencies : "",
        //     languages: item.languages ? item.languages : ""
        //   };
        // });
        setData(
          response.sort((a, b) =>
            a.name.common > b.name.common
              ? 1
              : b.name.common > a.name.common
              ? -1
              : 0
          )
        );
      } catch (error) {
        setData(null);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
