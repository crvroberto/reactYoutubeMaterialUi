import React from 'react'
import { 
    makeStyles, 
    AppBar, 
    Button, 
    Toolbar, 
    IconButton, 
    Drawer, 
    List, 
    ListItem, 
    Divider, 
    ListItemText, 
    ListItemIcon, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

function Home() {

    const useStyles = makeStyles((theme) => ({
        root: {

            height: '100vh'
        },
        appBar: {
            boxShadow: 'none',
            zIndex: theme.zIndex.drawer + 1,
        },
        logo: {
            height: 30,
        },
        menuIcon: {
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(2)
        },
        icons: {
            paddingRight: theme.spacing(2)
        },
        grow: {
            flexGrow: '1'
        },
        drawer: {
            drawer: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            borderRight: 'none'
        },
        drawerContainer: {
            drawer: 240,
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        ListItemText:{
            fontSize: 14
        }
    }))

    const classes = useStyles();

    return <div className={classes.root}>

        <AppBar color='inherit' className={classes.appBar}>
            <Toolbar>
                <IconButton className={classes.menuIcon} color="inherit" >
                    <MenuIcon />
                </IconButton>
                <img src='/images/preto.png' alt='logo' className={classes.logo}></img>
                <div className={classes.grow} />
                <IconButton className={classes.icons} color="inherit">
                    <VideoCallIcon />
                </IconButton>

                <IconButton className={classes.icons} color="inherit">
                    <AppsIcon />
                </IconButton>

                <IconButton className={classes.icons} color="inherit">
                    <MoreVertIcon />
                </IconButton>
                <Button variant='outlined' color="secondary" startIcon={<AccountCircle />}>Fazer Login</Button>
            </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.ListItemText,
                            }} primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
               
            </div>
        </Drawer>
        


    </div>
}
export default Home;