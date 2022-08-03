import { React, useState, useEffect } from "react";
import axios from "axios";
import QoLDataCard from "./QoLDataCard";
import { filterQoL } from "../helpers/selectors";

// const cityScore = {
//   _links: {
//     curies: [
//       {
//         href: "https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
//         name: "location",
//         templated: true,
//       },
//       {
//         href: "https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
//         name: "city",
//         templated: true,
//       },
//       {
//         href: "https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/",
//         name: "ua",
//         templated: true,
//       },
//       {
//         href: "https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/",
//         name: "country",
//         templated: true,
//       },
//       {
//         href: "https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/",
//         name: "a1",
//         templated: true,
//       },
//       {
//         href: "https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/",
//         name: "tz",
//         templated: true,
//       },
//     ],
//     self: {
//       href: "https://api.teleport.org/api/urban_areas/slug:halifax/scores/",
//     },
//   },
//   categories: [
//     { color: "#f3c32c", name: "Housing", score_out_of_10: 6.895000000000001 },
//     {
//       color: "#f3d630",
//       name: "Cost of Living",
//       score_out_of_10: 4.9430000000000005,
//     },
//     { color: "#f4eb33", name: "Startups", score_out_of_10: 3.624 },
//     {
//       color: "#d2ed31",
//       name: "Venture Capital",
//       score_out_of_10: 2.2840000000000003,
//     },
//     {
//       color: "#7adc29",
//       name: "Travel Connectivity",
//       score_out_of_10: 1.5699999999999998,
//     },
//     { color: "#36cc24", name: "Commute", score_out_of_10: 5.402750000000001 },
//     { color: "#19ad51", name: "Business Freedom", score_out_of_10: 8.966 },
//     { color: "#0d6999", name: "Safety", score_out_of_10: 7.188500000000001 },
//     { color: "#051fa5", name: "Healthcare", score_out_of_10: 8.67 },
//     { color: "#150e78", name: "Education", score_out_of_10: 5.42 },
//     {
//       color: "#3d14a4",
//       name: "Environmental Quality",
//       score_out_of_10: 7.618499999999999,
//     },
//     { color: "#5c14a1", name: "Economy", score_out_of_10: 5.8405000000000005 },
//     { color: "#88149f", name: "Taxation", score_out_of_10: 7.2745000000000015 },
//     {
//       color: "#b9117d",
//       name: "Internet Access",
//       score_out_of_10: 6.123500000000001,
//     },
//     {
//       color: "#d10d54",
//       name: "Leisure \u0026 Culture",
//       score_out_of_10: 3.942,
//     },
//     { color: "#e70c26", name: "Tolerance", score_out_of_10: 7.853499999999999 },
//     { color: "#f1351b", name: "Outdoors", score_out_of_10: 4.023 },
//   ],
//   summary:
//     "\u003cp\u003eHalifax, Canada, is among the top cities with a \u003cb\u003efree business environment\u003c/b\u003e.\n\n    \n        According to our city rankings, this is a good place to live with high ratings in \u003cb\u003ehousing\u003c/b\u003e, \u003cb\u003esafety\u003c/b\u003e and \u003cb\u003ehealthcare\u003c/b\u003e.\n    \n\n    \n\u003c/p\u003e\n\n",
//   teleport_city_score: 60.742027027027035,
// };

const QoLData = () => {
  const [slugScore, setSlugScore] = useState([]);
  useEffect(() => {
      let cityName = "halifax";
      // Teleport API
      const api = 
        `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`
      

      axios.get(`${api}`)
      .then((res)=>{
        const data = res.data["categories"]
        setSlugScore(data);
      })
      .catch((err)=>{
        console.log(err)
      })
  }, []);

  //console.log(slugScore)
  //get slugScores for a city
  const categoriesArr = filterQoL(slugScore).map((slugScore) => {
    return (
      <QoLDataCard
        key={slugScore.color}
        name={slugScore.name}
        score={slugScore.score_out_of_10}
      />
    );
  });

  return (
    <section>
      <ol>{categoriesArr}</ol>
    </section>
  );
};

export default QoLData;
