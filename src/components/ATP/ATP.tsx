import React, { useEffect, useState } from "react";

import Header from "../Header";
import Styled from "./ATP.styled";

interface TopProps {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  country: string;
  ranking: number;
  movement: string;
  ranking_points: number;
}

const ATP = () => {
  const [top10, setTop10] = useState<TopProps[]>([]);
  const [apiError, setApiError] = useState<string>("");
  console.log("🚀 ~ ATP ~ apiError:", apiError)
  const { REACT_APP_RAPID_API_KEY } = process.env;

  useEffect(() => {
    // testing top 10. comment on production
    /* setTimeout(() => {
      setTop10([
        {
          id: 1,
          full_name: "Rafa Nadal",
          ranking: 1,
          country: "Spain",
          ranking_points: 10000,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 2,
          full_name: "Rafa Nadal",
          ranking: 2,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 3,
          full_name: "Rafa Nadal",
          ranking: 3,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 4,
          full_name: "Rafa Nadal",
          ranking: 4,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 5,
          full_name: "Rafa Nadal",
          ranking: 5,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 6,
          full_name: "Rafa Nadal",
          ranking: 6,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 7,
          full_name: "Rafa Nadal",
          ranking: 7,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 8,
          full_name: "Rafa Nadal",
          ranking: 8,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 9,
          full_name: "Rafa Nadal",
          ranking: 9,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
        {
          id: 10,
          full_name: "Rafa Nadal",
          ranking: 10,
          country: "Spain",
          ranking_points: 9500,
          first_name: "",
          last_name: "",
          movement: "",
        },
      ]);
    }, 2000); */

    fetch("https://tennis-live-data.p.rapidapi.com/rankings/ATP", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": `${REACT_APP_RAPID_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setTop10(
          data.results.rankings.filter((top: any, index: number) => index < 10)
        )
      )
      .catch((error) => setApiError(error));
  }, [REACT_APP_RAPID_API_KEY]);

  let loader = top10.length ? null : <div className="loader"></div>;
  return (
    <React.Fragment>
      <Styled className="atp">
        <Header />

        <div className="max-width-container">
          <h2 className="title">ATP TOP 10 RANKING</h2>

          <table className="mainTable">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Country</th>
                <th>Player</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {loader
                ? null
                : top10.map((top: TopProps, index: number) => {
                    return (
                      <tr key={index}>
                        <td>{top.ranking}</td>
                        <td>{top.country}</td>
                        <td>{top.full_name}</td>
                        <td>{top.ranking_points}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          {loader}
        </div>
      </Styled>
    </React.Fragment>
  );
};

ATP.displayName = "components/ATP";

export default ATP;
