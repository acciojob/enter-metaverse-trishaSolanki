//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const statusParagraph = document.getElementById('status');
  const enterButton = document.getElementById('enterBtn');

  enterButton.addEventListener('click', function() {
    statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
  });
});
