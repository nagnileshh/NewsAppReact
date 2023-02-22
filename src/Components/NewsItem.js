import React, { Component } from "react";
import sampleRes from "./sampleResponse.json";
export default class NewsItem extends Component {
  render() {
    let { title, description, urlImage, url } = this.props;

    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            style={{ height: "10rem" }}
            src={urlImage}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body my-3">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text btn-sm">{description.slice(0, 70)}...</p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read More..
            </a>
          </div>
        </div>
      </>
    );
  }
}
