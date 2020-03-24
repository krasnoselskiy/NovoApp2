import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchAuthor} from "../actions/authorActions";
import Loader from 'react-loader-spinner'
import styled from '@emotion/styled'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class AuthorContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAuthor());
  }

  render() {
    const { error, loading, isLoaded, name, photo, description } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return  <SpinnerWrap>
                <Loader type="TailSpin" color="#000" height={100} width={100} />
              </SpinnerWrap>
    }

    return (
      <About>
        <div className="container flex">
          {isLoaded && photo ?
            <img src={photo} alt=""/> : null
          }

          {isLoaded && description ?
            <div className="description-wrap">
              <h2>{name}</h2>
              {description.map((item, i) => {
                return item.content[0].value.length ? <p key={i}>{item.content[0].value}</p> : null;
              })}
            </div> : null
          }
        </div>
      </About>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.author.isLoaded ? state.author.info.name : null,
    photo: state.author.isLoaded ? state.author.info.profilePhoto.fields.file.url : null,
    description: state.author.isLoaded ? state.author.info.description.content : null,
    loading: state.author.loading,
    isLoaded: state.author.isLoaded,
    error: state.author.error
  }
};

const SpinnerWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`

const About = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 10px;
  }

  img {
    width: 30%;
    margin-right: 30px;
  }

  .description-wrap {
    width: 70%;
    text-align: left;
  }
`

export default connect(mapStateToProps)(AuthorContainer);
