import { Col } from "reactstrap";
import SearchInput from "./SearchInput";
import { UL } from "../../../AbstractElements";
import DarkMode from "./DarkMode/DarkMode";
import ResponsiveSearch from "./ResponsiveSearch";
import NotificationHeader from "./NotificationHeader/NotificationHeader";
import BookmarkHeader from "./BookmarkHeader/BookmarkHeader";
import CartHeader from "./CartHeader/CartHeader";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import UserProfile from "./UserProfile/UserProfile";
import ZoomInOut from "./ZoomInOut/ZoomInOut";
import Language from "./Language/Language";

const MainHeader = () => {
  return (
    <Col className="page-main-header">
      <SearchInput />
      <div className="nav-right">
        <UL className="header-right flex-row simple-list overflow-visible">
          <DarkMode />
          <ResponsiveSearch />
          <ZoomInOut /> 
          <Language />
          <NotificationHeader />
          <BookmarkHeader />
          <CartHeader />
          <MessagesHeader />
          <UserProfile />
        </UL>
      </div>
    </Col>
  );
};

export default MainHeader;
