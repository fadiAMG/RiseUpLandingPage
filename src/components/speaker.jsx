import React, { Component } from "react";

class Speaker extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="speaker-section">
          <div className="speaker-container">
              <div className="speaker-card">
                <img className="card-img" src={this.props.speakerURL} alt="Speaker-photo" />
                <h1 className="speaker-name">{this.props.speakerName}</h1>
                <p className="speaker-role">{this.props.speakerRole}</p>
              </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Speaker;
