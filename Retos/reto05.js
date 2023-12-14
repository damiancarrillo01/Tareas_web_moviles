function PDF() {
    // Obtén el archivo PDF que el usuario subió, por ejemplo, con un input file.
    var fileInput = document.getElementById('archivoPDF'); // Asegúrate de que 'archivoPDF' sea el ID de tu input file.

    if (fileInput.files.length > 0) {
        var pdfContainer = document.getElementById('pdfContainer');
        var pdfViewer = document.getElementById('pdfViewer');

        // Establece el atributo src del embed para mostrar el PDF.
        pdfViewer.src = URL.createObjectURL(fileInput.files[0]);

        // Muestra el contenedor del PDF.
        pdfContainer.style.display = 'block';
    }
}

function enviarformulario(){
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const email=document.getElementById("email").value;
    const sexo=document.getElementById("sexo").value;
    const edad=document.getElementById("edad").value;
    
}

