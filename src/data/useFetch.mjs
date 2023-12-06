import { useState, useEffect } from "react";

const options = {
  headers: {
    "X-RapidAPI-Key": "1ace780d36msh1fe2f240a7ec1f3p1c29dcjsn5a41653ee415",
    "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
  },
};
export function useFetch(urlApi) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://motorcycle-specs-database.p.rapidapi.com/${urlApi}`, options)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [urlApi]);
  console.log(data);

  return { data };
}
