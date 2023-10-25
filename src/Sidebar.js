import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useStateValue } from './StateProvider';
import NewspaperIcon from '@mui/icons-material/Newspaper';
function Sidebar() {

    const [{user}, dispatch] = useStateValue();
    
    
  return (
    <div className='sidebar'>


      
      <SidebarRow src={user.photoURL} title= {user.displayName}/>
      <SidebarRow Icon={NewspaperIcon}
      title="News"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon = {StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreIcon} title="See More"/>
      
        
    </div>
  )
}

export default Sidebar
