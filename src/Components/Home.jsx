import { TypeAnimation } from 'react-type-animation';
import linkedin from './linkedInBadge.JPG'
import GitHub from './GitHub-Logo (1).png'

function Home() {
    return(
    <div className="home">
        <br/>
    <TypeAnimation
        sequence={[
            'Welcome to the most amazing',
            1000,
            'Welcome to the most incredible',
            1000,
            'Welcome to the best app you have ever seen',
            1000,
            'Welcome to project Adele',
            1500,
            'Welcome to project Adele.. a work in progress',
            3000
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={60}
        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold', color: 'pink' }}
        repeat={0}
    />
<br/><br/><br/><br/>
<a href='https://www.linkedin.com/in/adelewatkins' target="_blank">
    <img style={{margin: 'auto', width: '25%'}} src={linkedin} ></img>
</a>
<a href='https://github.com/adelewatkins' target="_blank">
    <img style={{margin: 'auto', width: '25%'}} src={GitHub} ></img>
</a>
</div>
);
}
export default Home;