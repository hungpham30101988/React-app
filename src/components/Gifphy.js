import React, {Component} from 'react';

class Gifphy extends Component {
  render() {
    const props = this.props.gifphy;
    const backgroundImage = {
      backgroundImage: `url(${props.images.downsized.url})`
    };
    
    return (
      <div className="col-md-3 col-sm-4 col-xs-6">
        <div className="gifphy">
          <div className="gifphy-photo">
            <a href={props.images.original.url}
               data-fancybox="gallery"
               data-caption={props.username}
            >
              <div
                className="gifphy-photo-grid"
                style={backgroundImage}
              >
              </div>
            </a>
          </div>
          <div className="gifphy-info text-right has-feedback">
            <a
              href={props.url}
              target={'_blank'}
              className="gifphy-link glyphicon glyphicon-link">
            </a>
            <span>
              <i className="glyphicon glyphicon-eye-open"></i>
              7
            </span>
            <span>
              <i className="glyphicon glyphicon-comment"></i>
              9
            </span>
            <span>
              <i className="glyphicon glyphicon-heart"></i>
              39
            </span>
          </div>
        </div>
        {props.user ?
          <div className="gifphy-user has-feedback">
            <div className="gifphy-user-avatar">
              <img src={props.user.avatar_url} alt={props.user.display_name}/>
            </div>
            <h2 className="gifphy-user-name">
              {props.user.display_name}
            </h2>
          </div> : null
        }
      </div>
    );
  }
}

export default Gifphy;
