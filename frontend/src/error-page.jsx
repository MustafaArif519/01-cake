import { useLocation } from 'react-router-dom';
const ErrorPage = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const domainName = window.location.hostname;


  return (
    <>
    <h1>Oh no, looks like &apos;{domainName}{currentUrl}&apos; does <b>not</b> exist!</h1>
    <div>
    <h1>Error 404</h1>
      
    </div>
    </>
  );
};

export default ErrorPage;