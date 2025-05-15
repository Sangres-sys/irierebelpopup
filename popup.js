
(function() {
  if (sessionStorage.getItem('irie-popup-shown')) return;

  const style = document.createElement('style');
  style.textContent = `
    #irie-popup {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 320px;
      background-color: #fff;
      border: 2px solid #4CAF50;
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      z-index: 9999;
      display: none;
      animation: fadeIn 0.5s ease-in-out;
      text-align: center;
      font-family: sans-serif;
    }
    #irie-popup h3 {
      margin-top: 0;
      font-size: 22px;
      color: #2e7d32;
    }
    #irie-popup p {
      font-size: 15px;
      margin-bottom: 18px;
    }
    .popup-btn {
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-bottom: 12px;
      padding: 14px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      box-sizing: border-box;
    }
    .btn-green {
      background-color: #4CAF50;
    }
    .btn-green:hover {
      background-color: #388e3c;
    }
    .btn-orange {
      background-color: #FF9800;
    }
    .btn-orange:hover {
      background-color: #e68900;
    }
    #popup-close {
      position: absolute;
      top: 8px;
      right: 12px;
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
    #popup-close:hover {
      color: #000;
    }
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(10px);}
      to {opacity: 1; transform: translateY(0);}
    }
  `;
  document.head.appendChild(style);

  const div = document.createElement('div');
  div.id = 'irie-popup';
  div.innerHTML = `
    <div id="popup-close" onclick="document.getElementById('irie-popup').style.display='none'">&times;</div>
    <h3>Unterstütze IrieRebel – mit einem Klick</h3>
    <p>Wenn dir unsere Inhalte gefallen, kannst du uns unterstützen, indem du deine Hanfsamen oder Grow-Produkte über unsere Partner kaufst – ganz ohne Mehrkosten.</p>
    <a href="https://www.irierebel.com/hanfsamen-katalog/" target="_blank" rel="nofollow sponsored" class="popup-btn btn-green">➤ Zu den Hanfsamen</a>
    <a href="https://www.irierebel.com/growshop/" target="_blank" rel="nofollow sponsored" class="popup-btn btn-orange">➤ Zum Growshop</a>
  `;
  document.body.appendChild(div);

  function showPopup() {
    if (!sessionStorage.getItem('irie-popup-shown')) {
      document.getElementById("irie-popup").style.display = "block";
      sessionStorage.setItem('irie-popup-shown', 'true');
    }
  }

  setTimeout(showPopup, 15000);

  window.addEventListener('scroll', () => {
    if (window.scrollY > (document.body.scrollHeight / 2)) {
      showPopup();
    }
  });

  document.addEventListener("mouseout", function(e) {
    if (!e.toElement && !e.relatedTarget && e.clientY < 50) {
      showPopup();
    }
  });
})();
