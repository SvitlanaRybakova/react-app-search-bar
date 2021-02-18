import { container, message } from '../styles/NotFound.module.css';

function NotFound(){
  return(
    <div className={container}>
    <p className={message}>Sorry, we cannot find the article you are looking for</p>
    <span>¯\_(ツ)_/¯</span>
    </div>
  )
}export default NotFound;