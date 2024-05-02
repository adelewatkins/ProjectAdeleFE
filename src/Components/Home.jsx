import { TypeAnimation } from 'react-type-animation';

function Home() {
    return(
    <div className="home">
    <TypeAnimation
        sequence={[
            'Welcome to the most amazing',
            1000,
            'Welcome to the most incredible',
            1000,
            'Welcome to the best app you have ever seen',
            1000,
            'Welcome to project Adele',
            3000
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={60}
        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold', color: 'pink' }}
        repeat={0}
    />

</div>
);
}
export default Home;