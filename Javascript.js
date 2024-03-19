function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    
    if (file) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            var contents = e.target.result;
            document.getElementById('output').innerText = contents;
        };
        
        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}
