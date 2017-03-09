import React from 'React';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/views/${post.code}`}>
            <img src={post.display_src} alt={post.caption}
                 className="frid-photo" />
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
        </figcaption>
      </figure>
    )
  }
});

export default Photo;
