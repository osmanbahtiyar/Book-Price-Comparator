import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';

const App = () => {
    return (
        <Router>
            <main>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/book/:search_param' component={BookScreen} />
                </Container>
            </main>
        </Router>
    );
};

export default App;
