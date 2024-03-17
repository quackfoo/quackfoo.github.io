function saveContent() {
	var content = document.getElementById("input").value;
	var fileInput = document.getElementById("file");

	if ('files' in fileInput && fileInput.files.length > 0) {
		var file = fileInput.files[0];
		var reader = new FileReader();

		reader.onload = function(event) {
			var blob = new Blob([content], { type: 'text/plain' });
			var url = window.URL.createObjectURL(blob);

			var a = document.createElement('a');
			a.href = url;
			a.download = file.name; // Use the filename from file input
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);
		};

		reader.readAsDataURL(file);
	} else {
		alert('Please select a file first.');
  	}
}