
function formatText(command) {
    document.execCommand(command, false, null);
    document.getElementById('editor').focus();
}

function insertLink() {
    var url = prompt("Enter the URL:");
    if (url) {
        document.execCommand('createLink', false, url);
    }
}

function insertImage() {
    var url = prompt("Enter the image URL:");
    if (url) {
        document.execCommand('insertImage', false, url);
    }
}

function publishPost() {
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('editor').innerHTML; // Get the HTML content
    var category = document.getElementById('post-category').value;
    var tags = document.getElementById('post-tags').value;

    // Here you would typically send this data to a server
    console.log(`Title: ${title}, Content: ${content}, Category: ${category}, Tags: ${tags}`);
}

document.getElementById("postForm").addEventListener("submit", async function(event) {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    // Send the post data to the server
    const response = await fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
  
    const result = await response.json();
    if (result.success) {
      document.getElementById("message").innerText = "Post published successfully!";
    } else {
      document.getElementById("message").innerText = "Failed to publish post.";
    }
  });
  
  