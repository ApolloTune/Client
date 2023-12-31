import { useState } from 'react'
import exampleData from '../../../JsonTestData/musicList'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
function KeyPagination() {
  const [searchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(exampleData.length / 4);
  let location = useLocation();
  const renderPageButtons = () => {
    const buttons = [];

    for (let index = 1; index <= pageCount; index++) {
      buttons.push(
        <button className={`text-xl ${searchParams.get('page') == index ? 'text-pink-50' : ''}`} key={index}>
          <Link to={`${location.pathname}?page=${index}`}>{index}</Link>
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className='container flex justify-center mt-2'>
      <div className='flex flex-row items-center bg-white px-2 py-2 rounded-[20px] space-x-12'>
        <button className='hover:bg-slate-100'>
          <Link to={`${location.pathname}?page=${searchParams.get('page') > 1 ? searchParams.get('page') - 1 : 1}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </button>
        {renderPageButtons()}
        <button className='hover:bg-slate-100'>
          <Link  to={`${location.pathname}?page=${searchParams.get('page') !== null && searchParams.get('page') < pageCount ? parseInt(searchParams.get('page')) + 1 : 2}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default KeyPagination