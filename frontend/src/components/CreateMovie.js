import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      isbn:'',
      author:'',
      description:'',
      published_date:'',
      publisher:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      actors: this.state.actors,
      genre: this.state.genre,
      rating: this.state.rating,
      director: this.state.director,
      description: this.state.description,
      published_year: this.state.published_year
    };

    axios
      .post('http://localhost:8082/api/movies', data)
      .then(res => {
        this.setState({
          title: '',
          actors:'',
          genre:'',
          rating:'',
          director:'',
          description:'',
          published_year:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateMovie!");
      })
  };

  render() {
    return (
      <div className="CreateMovie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Movie List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Movie</h1>
              <p className="lead text-center">
                  Create new movie
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Movie'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                {/* <br /> */}

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Actors Name'
                    name='actors'
                    className='form-control'
                    value={this.state.actors}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Movie Genre'
                    name='genre'
                    className='form-control'
                    value={this.state.genre}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Movie rating'
                    name='rating'
                    className='form-control'
                    value={this.state.rating}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Movie director'
                    name='director'
                    className='form-control'
                    value={this.state.director}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Published Year'
                    name='published_year'
                    className='form-control'
                    value={this.state.published_year}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMovie;