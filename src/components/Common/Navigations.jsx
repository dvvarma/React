import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles }  from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import HomeIcon from '@material-ui/icons/Home';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {NavLink} from 'react-router-dom';
import '../../App.css';

const styles = {
    root: {
      flexGrow: 1, 
    },

    list: {
        width: 250,
        height: 'calc(100% - 64px)',
    },
    

    icon: {
        margin: 2,
      },

    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
      
    },

    appBar: {
        backgroundColor: "White",
        height : 64
    },
    appBarButton: {
        borderRight: "1px solid #ffffff",
        borderRadius: "0%"
    },

    formControl: {
        minWidth: 120,
    },

  };
  
  const sideList = (
    <div className={styles.list}>
      <List>
        {['Manage Campaigns', 'Manage Promotions', 'Manage Coupons', 'Bulk Upload', 'Trigger Offers'].map((text, index) => (
            <NavLink to="/abc" key={text}  exact>
          <ListItem button > 
            <ListItemIcon>  
              <CloudUploadIcon/>   
              </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {['Home', 'Feedback'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
            {index % 2 === 0 ? <HomeIcon /> : <InboxIcon /> } 
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

class Navigations extends Component {
    constructor(props){
        super(props);
        this.state = {
            left:false , 
            user: '' , 
            open: false
        }
    
    }

        toggleDrawer (side, open) {
          this.setState({ left: open });
        };

        handleChange = name => event => {
            this.setState({ [name]: event.target.value });
          };
    
        handleClose = close => {
              this.setOpen(false);
            }
        handleOpen = open => {
              this.setOpen(true);
            }
        componentDidMount() {
              this.props.getUser();
            }
          
    render() {
      console.log(this.props);
        // debugger;
        const { classes } = this.props;
       
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="default" aria-label="Menu" 
                            onClick={()=>this.toggleDrawer('left', true)}>
                            <MenuIcon />     
                        </IconButton>
                        <SwipeableDrawer 
                        open={this.state.left} onClose={()=>this.toggleDrawer('left', false)} 
                            onOpen={()=>this.toggleDrawer('left', true)}>
                            <div tabIndex={0} role="button" onClick={()=>this.toggleDrawer('left', false)} 
                                onKeyDown={()=>this.toggleDrawer('left', false)}>
                                {sideList}
                            </div>
                        </SwipeableDrawer>
                        <img src="https://cdn.corporate.walmart.com/bd/f8/3c9db9da4f40938a94ab198d7d9e/samsclublogo.png" 
                        width="150" height="32" ></img>
                        <Typography variant="h6" color="default" className={classes.grow}> </Typography>
                        <Button color="default" >
                          <i className="fas fa-home"></i> &nbsp; Home 
                        </Button>
                        <Tooltip title="Full Name">
                          <Avatar className={classes.avatar}>FN</Avatar>
                        </Tooltip>
                        <Button color="default" >
                          <i className="fas fa-sign-out-alt"></i> &nbsp; Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Navigations.propTypes  = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    userList: state.auth.userList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch({type: 'USER_LIST'})
  }
}

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Navigations);