export default function Aside(props) {
	const { handleToggleModal, data } = props;
	return (
		<div className="sidebar">
			<div onClick={handleToggleModal} className="bgOverlay"></div>
			<div className="sidebarContents">
				<h2>{data?.title}</h2>
				<div className="descriptionContanier">
					<p className="descriptionTitle">{data?.date}</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
						eligendi facilis incidunt, quis vero ipsam aspernatur eius aperiam
						debitis temporibus! Officia laudantium nostrum expedita cumque
						consectetur, architecto animi quis non!
					</p>
				</div>
				<button onClick={handleToggleModal}>
					<i className="fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
}
