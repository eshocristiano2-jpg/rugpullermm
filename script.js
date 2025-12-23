const btn = document.getElementById("rugBtn");
const result = document.getElementById("result");
const input = document.getElementById("tokenInput");

btn.onclick = () => {
  if (!input.value.trim()) {
    alert("Enter a token address");
    return;
  }

  result.classList.remove("hidden");
};
