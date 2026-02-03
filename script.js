document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Thanh Tiếnđã load xong!');

    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
});
<script>
  const img = document.createElement("img");
  img.src = "images/avatar.jpg";
  img.style.width = "180px";
  img.style.borderRadius = "50%";
  img.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";

  document.getElementById("avatar-box").appendChild(img);
</script>
