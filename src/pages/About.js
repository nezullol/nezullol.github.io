import '../App.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="About">


<div className='background'>
<div className='home-wrapper'>

      

ABOUT ME
<br />
<br />

Hello My name is Chris
<br />
I dont just fix computers, this is what im up to in my down time.

<br />


<br />
<br />

PERSONAL PROJECTS:
<Link className='link'  to="/Tetris">Tetris</Link>    
<a className='link' href='https://github.com/nezullol'>
PORTFOLIO Link
</a>
<a className='link' href='https://github.com/nezullol'>
Blog
</a>      




</div>

</div>



    </div>
  )
}


export default About;
