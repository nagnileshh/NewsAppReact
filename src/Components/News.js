import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "Daily Beast" },
      author: "Jake Lahut, Zachary Petrizzo",
      title:
        "Meet Ron DeSantis, Former AP 'Student of the Year' - The Daily Beast",
      description:
        "The Florida governor is trying to sell a populist pitch that APs aren’t worth the trouble, but he benefited from an AP class on his way to Yale.",
      url: "https://www.thedailybeast.com/meet-ron-desantis-former-ap-student-of-the-year",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1676691408/230217-Lahut-Petrizzo-DeSantis-tease_fqlxsu",
      publishedAt: "2023-02-18T03:38:50Z",
      content:
        "When Florida Governor Ron DeSantisfloated the possibility of eliminating Advanced Placement classes from his states curriculum, he conveniently left out an important fact.\r\nDeSantis was once the AP U… [+4608 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "Brazil celebrates its return to full-scale Carnival festivities - Al Jazeera English",
      description:
        "Brazil’s world-famous celebration resumes in full force after years of delays and cancellations brought on by COVID-19.",
      url: "https://www.aljazeera.com/gallery/2023/2/18/brazil-celebrates-its-return-to-full-scale-carnival-festivities",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/02/AP23048752155777.jpg?resize=1920%2C1440",
      publishedAt: "2023-02-18T03:07:21Z",
      content:
        "The samba was playing, revellers were dancing and throughout the city of Rio de Janeiro in Brazil, parties and pageantry filled the streets.\r\nFriday marked the official opening of Brazils Carnival fe… [+1880 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "Sian E Harding",
      title: "The 61-year-long search for artificial hearts - BBC",
      description:
        "Humanity's engineering achievements have been extraordinary, so why has building an artificial heart has proved to be more challenging than expected.",
      url: "https://www.bbc.com/future/article/20230217-the-61-year-long-search-for-artificial-hearts",
      urlToImage: "https://ychef.files.bbci.co.uk/live/624x351/p0f3tmls.jpg",
      publishedAt: "2023-02-18T02:33:39Z",
      content:
        "The amount of blood circulating in the left ventricle/body loop must be very close to that in the right ventricle/lung loop. With 100,000 beats a day, even a teaspoon of difference at each beat would… [+3412 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Megan Thomas",
      title:
        "Kyle Jacobs, songwriter and husband of singer Kellie Pickler, dead at 49 - CNN",
      description:
        "Kyle Jacobs, a country music producer and songwriter, who co-starred with his wife, singer Kellie Pickler, in a CMT docuseries, has died, according to Nashville police. He was 49.",
      url: "https://www.cnn.com/2023/02/17/entertainment/kyle-jacobs-death/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230217172356-kyle-jacobs-kellie-pickler.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-02-18T02:02:00Z",
      content:
        "Editors Note: If you or someone you know is struggling with suicidal thoughts or mental health matters, please call or text the 988 Suicide &amp; Crisis Lifeline to connect with a trained counselor o… [+2318 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Chantz Martin",
      title:
        "Eric Bieniemy agrees in principle on deal to become Commanders' new OC: report - Fox News",
      description:
        "Eric Bieniemy has agreed in principle on a multi-year deal that will make him the Washington Commanders' next offensive coordinator and assistant head coach, ESPN reported.",
      url: "https://www.foxnews.com/sports/eric-bieniemy-agrees-to-become-commanders-new-oc",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/Eric-Bieniemy2.jpg",
      publishedAt: "2023-02-18T01:43:00Z",
      content:
        "The Washington Commanders and two-time Super Bowl winning coach Eric Bieniemy have agreed in principle on a contract that will make him the team's new offensive coordinator and assistant head coach, … [+2828 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "John Dias, Carolyn Gusoff",
      title:
        "International flights at JFK Airport canceled for second day in a row due to power disruption - CBS New York",
      description:
        "A damaged electrical panel has been repaired, but it's not enough to fully restore operations at the terminal.",
      url: "https://www.cbsnews.com/newyork/news/international-flights-canceled-at-jfk-airport-for-second-day-in-a-row-due-to-power-disruption/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/16/49e4ad05-4db2-46e9-908e-a4b330f04383/thumbnail/1200x630/3e2c4eedc9831dd85519bca8ebb16caf/jfk-terminal-1-power-outage.jpg",
      publishedAt: "2023-02-18T01:38:00Z",
      content:
        "NEW YORK -- International flights were canceled at John F. Kennedy International Airport for a second day in a row Friday due to a power disruption.\r\nSo far Friday, at least 44 flights were delayed a… [+3744 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hey ");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container my-3 ">
        <h2>News : Top HeadLines</h2>
        <div className="row">
          {this.articles.map((element) => {
            return (
              <div className="col md-4">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  urlImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
