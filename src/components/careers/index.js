import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchCareer } from "../../actions/careers";
import { Loading } from "../../common";
import CareerItem from "./careerItems";

class Careers extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchCareer();
  }

  render() {
    const {
      careers: { isFetching, careerItems }
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div className="collapse" id="careers">
        <div id="careerlist">
          {careerItems.map((item, i) => (
            <CareerItem key={i} career={item} />
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    careers: state.careers
  };
}

Careers.propTypes = {
  fetchCareer: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchCareer }
)(Careers);
