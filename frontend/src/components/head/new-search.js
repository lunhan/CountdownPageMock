import React, { Component } from "react";
import style from './search.css';

import Search from './search';
import {InputGroup, DropdownButton, FormControl, Dropdown, Button} from 'react-bootstrap';

class MaterialOverview extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eleFixedTop: 0,
      fixed: false,
    }
  }

  onHandleScroll = () => {
    let scroll = document.body.scrollTop + document.documentElement.scrollTop;
    if (scroll >= 246) { 
      this.setState({
        fixed: true,
      })
    } else {
      this.setState({
        fixed: false,
      })
    }
  }
  componentDidMount() {
    const fixedTop = document.getElementById("overview").offsetTop;
    this.setState({
      eleFixedTop: fixedTop,
    })
    window.onscroll = this.onHandleScroll;
  }

  render() {
    const { fixed } = this.state;
    return <div className={style.overview}>
      {
        fixed && <div style={{ height: `${document.getElementById('overview').clientHeight}px` }}></div>
      }
      <div className={`${style.fixed} clearfix`} id="overview" style={fixed ? { position: "absoulte", top: "0px", zIndex: 2} : { position: "relative" }}>
          <Search/>
      </div>
    </div>

  }
}
export default MaterialOverview