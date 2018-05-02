import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar, MuiThemeProvider} from 'material-ui';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class Sheets extends Component {
  state = {
  valueSingle: '3',
  valueMultiple: ['3', '5'],
  };

 handleChangeMultiple = (event, value) => {
   this.setState({
     valueMultiple: value,
   });
 };

  showMenu() {
    return  <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
          <MenuItem value="1" primaryText="Blu-ray" />
          <MenuItem value="2" primaryText="Cassette" />
          <MenuItem value="3" primaryText="CD" />
          <MenuItem value="4" primaryText="DVD Audio" />
          <MenuItem value="5" primaryText="Hybrid SACD" />
          <MenuItem value="6" primaryText="Vinyl" />
        </IconMenu>;
  }

  render() {
    const {name} = this.props;
    return (
      <div className="sheets-content">
        <AppBar
          title={name}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementLeft={this.showMenu()}/>        
      </div>
    );
  }
}

Sheets.propTypes = {
  name: PropTypes.string,
};
export default Sheets;
