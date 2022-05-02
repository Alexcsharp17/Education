import logo from './logo.svg';
import BobMarley from './images/bob-marley.jpg';
import BillMurray from './images/Bill_Murray_2018.jpg';
import BillKlinton from './images/Bill-Clinton.webp';
import './App.css';
import './components/FeedbackForm/FeedbackForm'
import MyInfo from './components/MyInfo/MyInfo';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function App() {
  return (
    <div className="App">
      <FeedbackForm/>
      <div className="container d-flex justify-content-between p-4 m-2">
        <MyInfo name="Bill Murray" imageUrl={BillMurray} desription="Bill Murray is an American actor, comedian, and writer. The fifth of nine children, he was born William James Murray in Wilmette, Illinois, to Lucille (Collins), a mailroom clerk, and Edward Joseph Murray II, who sold lumber."/>
        <MyInfo name="Bill Klinton"  imageUrl={BillKlinton} desription="Clinton was born William Jefferson Blythe III on August 19, 1946, at Julia Chester Hospital in Hope, Arkansas. He is the son of William Jefferson Blythe Jr., a traveling salesman who had died in an automobile accident three months before his birth, and Virginia Dell Cassidy (later Virginia Kelley)."/>
        <MyInfo name="Bob Marley"  imageUrl={BobMarley} desription="Robert Nesta Marley OM (6 February 1945 – 11 May 1981) was a Jamaican singer, musician, and songwriter. Considered one of the pioneers of reggae, his musical career was marked by fusing elements of reggae, ska, and rocksteady, as well as his distinctive vocal and songwriting style."/>
      </div>
    </div>
  );
}

export default App;
