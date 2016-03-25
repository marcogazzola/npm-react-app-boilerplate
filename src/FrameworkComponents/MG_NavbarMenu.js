import React from 'react';
//import ReactDOM from 'react-dom';

var MenuSimpleItem = React.createClass({
  propTypes: {
    itemText:React.PropTypes.string,
    itemUrl:React.PropTypes.string,
    itemExternalUrl:React.PropTypes.bool,
    itemSelected:React.PropTypes.bool,
    header:React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      itemExternalUrl: true,
      itemSelected: false,
      header:false
    }
  },
  render: function () {
    var text = this.props.itemText;
    var url = this.props.itemUrl;
    var selected = this.props.itemSelected ? "active" : "";
    var target = this.props.itemExternalUrl ? "_blank":"";
    if (this.props.header)
    {
      return (
        <li className="dropdown-header"><strong>{text}</strong></li>
      );
    }
    else {
      return (
        <li className={selected}><a href={url} target={target}>{text}</a></li>
      );
    }
  }
});

var MenuItem = React.createClass({
  propTypes: {
    itemText:React.PropTypes.string.isRequired,
    itemUrl:React.PropTypes.string,
    itemExternalUrl:React.PropTypes.bool,
    itemSelected:React.PropTypes.bool,
    itemSubItems:React.PropTypes.array,
    header:React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      itemExternalUrl: true,
      itemSelected: false
    }
  },
  render: function () {
    var text = this.props.itemText;
    var url = this.props.itemUrl;
    var selected = this.props.itemSelected ? "active" : "";
    var target = this.props.itemExternalUrl ? "_blank":"";

    if (this.props.itemSubItems==undefined || this.props.itemSubItems==[])
    {
      return <MenuSimpleItem
      key={this.props.itemText}
      itemText={this.props.itemText}
      itemUrl={this.props.itemUrl}
      itemExternalUrl={this.props.itemExternalUrl}
      itemSelected={this.props.itemSelected}
      header={this.props.header}
      />
    }
    else
    {
      var items = this.props.itemSubItems.map(function(subItem) {
        return (
          <MenuItem
          key={subItem.Text}
          itemText={subItem.Text}
          itemUrl={subItem.Url}
          itemExternalUrl={subItem.ExternalUrl}
          itemSelected={subItem.Selected}
          itemSubItems={subItem.SubMenu}
          header={subItem.header}
          />
        );
      });
      return (
        <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">{text}<b className="caret"></b></a>
        <ul className="dropdown-menu">
        {items}
        </ul>
        </li>
      );
    }
  }
});

var MainMenu = React.createClass({
  propTypes: {
    appName:React.PropTypes.string.isRequired
  },
  render: function () {
    var menu ={
      items:[
        {Text:"google", Url:"http://www.google.com", ExternalUrl:true},
        {Text:"facebook", Url:"http://www.facebook.com",ExternalUrl:true, Selected:true},
        {Text:"SubMenu", Url:"#", SubMenu:[
          {Text:"submenu-1.1", Url:"http://www.gazzetta.it", header:true},
          {Text:"submenu-1.2", Url:"http://www.corriere.it", ExternalUrl:false, header:false},
          {Text:"submenu-2.1", Url:"http://www.gazzetta.it", header:true},
          {Text:"submenu-2.2", Url:"http://www.corriere.it", ExternalUrl:false}
        ]}
      ]
    };

    var items = menu.items.map(function(menuItem) {
      return (
        <MenuItem
        key={menuItem.Text}
        itemText={menuItem.Text}
        itemUrl={menuItem.Url}
        itemExternalUrl={menuItem.ExternalUrl}
        itemSelected={menuItem.Selected}
        itemSubItems={menuItem.SubMenu}
        Header={menuItem.header}
        />
      );
    });

    return (
      <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">{this.props.appName}</a>
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className="collapse navbar-collapse" id="navbar">
      <ul className="nav navbar-nav">
      {items}
      </ul>
      </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
      </nav>
    );
  }
});
export default MainMenu;
