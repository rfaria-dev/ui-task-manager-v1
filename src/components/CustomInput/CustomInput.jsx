const CustomInput = ({ label }) => {
	return (
		<div className="custom-input-container">
			<input type="text" className="custom-input" />
			{label ? (
				<label
					className={`${value.length > 0 ? 'shrink' : ''} custom-input-label}`}
				></label>
			) : null}
		</div>
	)
}
export { CustomInput }
