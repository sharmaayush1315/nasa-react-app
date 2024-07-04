export default function Main(props) {
	const { data, handleToggleModal, showModal } = props;
	function handleCLick() {
		showModal && handleToggleModal();
	}
	return (
		<div className="imageContainer" onClick={handleCLick}>
			<img
				className="bgImage"
				src={data.hdurl}
				alt={data.title || 'background-image'}
			/>
		</div>
	);
}
