import React, { Component } from 'react';
import SearchResultsCard from '../../containers/SearchResultsCard';
import CourseInfoCard from '../../containers/CourseInfoCard';
import WeatherCard from '../../containers/WeatherCard';
import './MainPage.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { showSearchResultsCard } from '../../actions/cardActions';
import { showCourseDetailsCard } from '../../actions/cardActions';
import { fetchGolfCourses } from '../../Thunks/golfCourses.js';
import { fetchWeather } from '../../Thunks/weather.js';
import PropTypes from 'prop-types';

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: '',
    };
  }

  handleInputChange = e => {
    this.setState({ searchTerms: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getGolfCourses(this.state.searchTerms);
    this.setState({ searchTerms: '' });
  };

  getGolfCourses = async searchTerms => {
    const { showSearchResultsCard, fetchGolfCourses, fetchWeather } = this.props;
    fetchGolfCourses(searchTerms);
    fetchWeather(searchTerms);
    showSearchResultsCard();
  };

  render() {
    const {
      pageName,
      golfCourses,
      cardSelected,
      weather,
    } = this.props;
    const { searchTerms } = this.state;

    return (
      <form className="MainPage" onSubmit={this.handleSubmit}>
        <p className="page-name">{pageName}</p>
        <input
          type="search"
          placeholder="Search for a zip code or city"
          className="search-input"
          value={searchTerms}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>

        <Route
          exact
          path="/findcourses"
          render={() => {
            if (cardSelected === 'search results') {
              return <Redirect to="/findcourses/searchresults" />;
            } else {
              return null;
            }
          }}
        />

        <Route
          exact
          path="/findcourses/searchresults"
          render={() => {
            return <SearchResultsCard courses={golfCourses} />;
          }}
        />

        <Route
          exact
          path="/findcourses/searchresults/courseinfo/:id"
          render={({ match }) => {
            const selectedCourse = golfCourses.find(course => {
              return course.id === match.params.id;
            });
            if(selectedCourse) {
              return (
                <div className="course-weather-container">
                  <CourseInfoCard course={selectedCourse} />
                  <WeatherCard weather={weather} />
                </div>
              );
            } else {
             return <Redirect to="/" />;
            }
          }}
        />
      </form>
    );
  }
}

export const mapStateToProps = ({
  golfCourses,
  cardSelected,
  searchResultsSelected,
  courseDetailsSelected,
  weather,
}) => ({ golfCourses, cardSelected, searchResultsSelected, courseDetailsSelected, weather });

export const mapDispatchToProps = dispatch => ({
  fetchGolfCourses: courses => dispatch(fetchGolfCourses(courses)),
  fetchWeather: weather => dispatch(fetchWeather(weather)),
  showSearchResultsCard: () => dispatch(showSearchResultsCard()),
  showCourseDetailsCard: () => dispatch(showCourseDetailsCard()),
});

MainPage.propTypes = {
  golfCourses: PropTypes.array.isRequired,
  cardSelected: PropTypes.string.isRequired,
  weather: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
    ]),
  fetchGolfCourses: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
  showSearchResultsCard: PropTypes.func.isRequired,
  showCourseDetailsCard: PropTypes.func.isRequired,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainPage)
);
