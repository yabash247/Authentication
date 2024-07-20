import { useAppDispatch } from '../../../ReduxToolkit/Hooks';
import { SearchSuggestionListType } from '../../../Type/Layout/Sidebar';
import { P, SVG } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { setResponsiveSearch } from '../../../ReduxToolkit/Reducers/LayoutSlice';

const ResponsiveSearchList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
    const dispatch = useAppDispatch();
    const handleSearch = () => {
      setSearchedWord("");
      dispatch(setResponsiveSearch());
    };
  return (
    <>
      {searchedArray?.map((item, index) => (
        <div className="ProfileCard u-cf" key={index}>
          <div className="ProfileCard-avatar">
            <SVG className="stroke-icon" iconId={item.icon} />
          </div>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname  w-auto d-flex justify-content-start gap-2" to={item.path} onClick={handleSearch}>{item.title}</Link>
            </div>
          </div>
        </div>
      ))}
      {!searchedArray?.length && <P>Opps!! There are no result found.</P>}
    </>
  )
}

export default ResponsiveSearchList