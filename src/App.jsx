import { useEffect, useState } from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	function handleToggleModal() {
		setShowModal(!showModal);
	}

	useEffect(() => {
		async function fetchAPIDATA() {
			const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
			const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
			const today = new Date().toDateString();
			const localKey = `NASA-${today}`;
			if (localStorage.getItem(localKey)) {
				const apiData = JSON.parse(localStorage.getItem(localKey));
				setData(apiData);
				console.log('Fetched from cache today');
				return;
			}
			localStorage.clear();
			try {
				const response = await fetch(url);
				const apiData = await response.json();
				localStorage.setItem(localKey, JSON.stringify(apiData));
				setData(apiData);
				console.log(`Fetched from api today`);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchAPIDATA();
	}, []);
	return (
		<>
			{data ? (
				<Main
					showModal={showModal}
					handleToggleModal={handleToggleModal}
					data={data}
				/>
			) : (
				<div className="loadingState">
					<i className="fa-solid fa-hourglass-half"></i>
				</div>
			)}
			{showModal && <Aside data={data} handleToggleModal={handleToggleModal} />}

			{data && <Footer data={data} handleToggleModal={handleToggleModal} />}
		</>
	);
}

export default App;
