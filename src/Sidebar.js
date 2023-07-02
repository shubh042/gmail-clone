import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import { Button, IconButton } from "@mui/material";
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from "@mui/icons-material";

function Sidebar({ emails }) {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar-compose"
        onClick={() => dispatch(openSendMessage())}
        startIcon={<Add fontSize="large" />}
      >
        Compose
      </Button>
      <Link to="/" className="sidebar-link">
        <SidebarOption
          Icon={Inbox}
          title="Inbox"
          number={emails.length}
          selected={true}
        />
      </Link>

      <SidebarOption Icon={Star} title="Starred" number={12} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={9} />
      <SidebarOption Icon={LabelImportant} title="Important" number={12} />
      <SidebarOption Icon={NearMe} title="Sent" number={81} />
      <SidebarOption Icon={Note} title="Drafts" number={5} />
      <SidebarOption Icon={ExpandMore} title="More" />

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;