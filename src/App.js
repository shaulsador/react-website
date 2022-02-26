import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Product from './components/Pages/Product';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home}></Route>
					<Route path='/about' component={About}></Route>
					<Route path='/product' component={Product}></Route>
					<Route path='/signup' component={SignUp}></Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default App;
