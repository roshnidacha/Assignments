class FileManager {
    constructor() {
      this.files = []; 
    }
  
   
    createFile() {
      try {
        const fileName = document.getElementById("fileName").value.trim();
        const fileContent = document.getElementById("fileContent").value.trim();
  
        if (!fileName) throw new Error("File name cannot be empty.");
        
        const file = { name: fileName, content: fileContent };
        this.files.push(file);
  
        alert(`File "${fileName}" created successfully!`);
        this.clearInputs();
      } catch (error) {
        alert(error.message);
      }
    }
     
    uploadFile() {
    try {
      const fileInput = document.getElementById("fileInput");
      const uploadedFile = fileInput.files[0];
      if (!uploadedFile) throw new Error("No file selected for upload.");

      const file = { name: uploadedFile.name, content: "Uploaded content" };
      this.files.push(file);

      alert(`File "${uploadedFile.name}" uploaded successfully!`);
    } catch (error) {
      alert(error.message);
    }
    }

  
    showFiles() {
    const fileListDiv = document.getElementById("fileList");
    fileListDiv.innerHTML = ""; // Clear previous list

    if (this.files.length === 0) {
      fileListDiv.innerHTML = "<p>No files available.</p>";
      return;
    }

    this.files.forEach((file, index) => {
    const fileDiv = document.createElement("div");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash"); 
    deleteIcon.style.cursor = "pointer"; 
    deleteIcon.style.marginLeft = "10px";
    deleteIcon.onclick = () => this.deleteFile(index);
    fileDiv.innerHTML = `${index + 1}. ${file.name} `;
    fileDiv.appendChild(deleteIcon);
    fileListDiv.appendChild(fileDiv);
    });
    }
  
    deleteFile(index) {
    try {
      if (index < 0 || index >= this.files.length) throw new Error("Invalid file index.");
      const deletedFile = this.files.splice(index, 1);
      alert(`File "${deletedFile[0].name}" deleted successfully!`);
      this.showFiles();
    } catch (error) {
      alert(error.message);
    }
     }

  
    clearInputs() {
    document.getElementById("fileName").value = "";
    document.getElementById("fileContent").value = "";
    }
}

const fileManager = new FileManager();