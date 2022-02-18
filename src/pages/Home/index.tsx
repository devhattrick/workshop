import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//Mui
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//icon
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
//Component
import { Demo, Workshop, Profile, Test } from '../../pages'
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Home: React.FC = ():JSX.Element =>{
    const navigate = useNavigate();
    const myDate:any  = new Date()  //Date().toLocaleString()
    const dateThai = myDate.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      //MuiDrawer
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };
    const [page,setPage] = useState(1)

    return(
        <>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini Workshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <p>title</p>
          <IconButton onClick={handleDrawerClose}>
            
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
              <Button color="primary" onClick={()=>setPage(1)}>
                <CoPresentIcon />
                {open === false ? '':<p>Profile</p>}
              </Button>
              </List>
              <List>
              <Button color="success" onClick={()=>setPage(2)}>
                  <FolderSpecialIcon />
              </Button>
        </List>
        <Divider />
        <List>
              <Button color="info" onClick={()=>setPage(3)}>
                  <AutoGraphIcon />
              </Button>
              </List>
              <List>
              <Button color="secondary" onClick={()=>setPage(0)}>
                  <InboxIcon />
              </Button>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , height:'100vh'}}>
        <DrawerHeader />
        { 
          page === 0 ?
        <Demo/>
        : page === 1 ?
            <Profile/>
        : page === 2 ?
            <Workshop/>
        : page === 3 ?
        <Test/>
        :
        <></>}
        
      </Box>
    </Box>
            {/* <div>
                <nav>
                    <p>{`Home${dateThai}`}</p>
                    <Button variant="contained" onClick={() => navigate('/demo')}>Demo</Button>
                </nav>
            </div> */}
        </>
    )
}
export default Home