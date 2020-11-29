import React from 'react';
import Totals from "./components/Totals";
import {
    CardContent,
    Container,
    makeStyles,
    Typography,
    Card,
    AppBar,
    Toolbar,
    Divider
} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import HomeIcon from '@material-ui/icons/Home';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ErrorIcon from '@material-ui/icons/Error';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from '@material-ui/icons/Help';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Daily from "./components/Daily";
import About from "./pages/About";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    list: {
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles()
    const [drawer, setDrawer] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };
    return (
        <div className={classes.root}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Covid19 Stats
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <ListItem component={Link} to={'/'}>
                                <ListItemIcon><HomeIcon/></ListItemIcon>
                                <ListItemText primary={'Home'}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'Daily Stats'}/>
                            </ListItem>
                            <Divider/>
                            <ListItem component={Link} to={'/cases'}>
                                <ListItemIcon><TrendingUpIcon/></ListItemIcon>
                                <ListItemText primary={'Cases'}/>
                            </ListItem>
                            <ListItem component={Link} to={'/hospitalizations'}>
                                <ListItemIcon><LocalHospitalIcon/></ListItemIcon>
                                <ListItemText primary={'Hospitalizations'}/>
                            </ListItem>
                            <ListItem component={Link} to={'/deaths'}>
                                <ListItemIcon><ErrorIcon/></ListItemIcon>
                                <ListItemText primary={'Deaths'}/>
                            </ListItem>
                        </List>
                        <List>
                            <Divider/>
                            <ListItem component={Link} to={'/about'}>
                                <ListItemIcon><HelpIcon/></ListItemIcon>
                                <ListItemText primary={'About'}/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <Container>
                    <br/>
                    <Switch>
                        <Route path="/deaths">
                            <Daily dataPoint={'deaths'} color={'#d63031'} title={'Daily new deaths'}/>
                        </Route>
                        <Route path="/hospitalizations">
                            <Daily dataPoint={'hospitalizations'} color={'#ff7675'} title={'Daily new hospitalizations'}/>
                        </Route>
                        <Route path="/cases">
                           <Daily dataPoint={'cases'} color={'#e17055'} title={'Daily new cases'}/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;
