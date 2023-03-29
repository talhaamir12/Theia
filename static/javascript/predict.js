function previewImage(event) {
	const reader = new FileReader()
	const imageField = document.getElementById("image-field")

	reader.onload = function () {
		if(reader.readyState == 2){
			imageField.src = reader.result
		}
	}

	reader.readAsDataURL(event.target.files[0]);

}

