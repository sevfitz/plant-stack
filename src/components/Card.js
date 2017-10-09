import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

Card.PropTypes = {
    name: PropTypes.string.isRequired,
    genus: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export function Card(props) {
    const { card, choice } = props;
    const { name, description, url } = card;
    return (
        <div className='box'>
            <div className='media'>
                <figure className='image is-128x128'>
                    <img src={url} alt={description} />
                </figure>
                <div className='card-content'>
                    <p className='title is-4'>Common Name: {name}</p>
                    <div>
                        <p className='title is-6' style={{ fontSize: '1.5em', color: 'brown' }}>
                            {choice}??
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

{/* <div class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p class="subtitle">
      Jeff Atwood
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer>
</div>


<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div> */}


{/* <div style={{ border: 'solid #fcb902 1px', width: 300, height: 400, margin: '50px auto', padding: '20' }}>
            <img style={{ maxHeight: 300 }} src={url} alt={description} />
            <p>Common Name: {name}</p>
            <div>
            <p style={{ fontSize: '1.5em', color: 'brown' }}>
                {choice}??
            </p>
            </div>
        </div> */}


export default connect(
    state => {
        return ({ 
            name: state.name, 
            genus: state.genus, 
            species: state.species, 
            description: state.description, 
            url: state.url 
    })}
)(Card);

