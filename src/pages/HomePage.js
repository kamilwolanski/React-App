import React from "react";
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Kamil Data",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo porro recusandae placeat nisi vitae mollitia eos, incidunt reiciendis temporibus voluptatum est inventore praesentium et ut fugit consequatur quam vel deleniti!",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Kamil Wolański",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo porro recusandae placeat nisi vitae mollitia eos, incidunt reiciendis temporibus voluptatum est inventore praesentium et ut fugit consequatur quam vel deleniti!",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Michał Majda",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo porro recusandae placeat nisi vitae mollitia eos, incidunt reiciendis temporibus voluptatum est inventore praesentium et ut fugit consequatur quam vel deleniti!",
  },
];
const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article}/>
  ));
  return (
      <div className="home">
          {artList}
      </div>
  );
};

export default HomePage;
