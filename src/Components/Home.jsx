import { TypeAnimation } from 'react-type-animation';

function Home() {
    const ExampleComponent = () => {
        return (
            <TypeAnimation
                // preRenderFirstString={true}
                sequence={[
                    'Welcome to the most amazing',
                    1000,// wait 1s before replacing
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
        );
    };
    return (
        <div className="home">
            <ExampleComponent />
        </div>
    )
}

export default Home
