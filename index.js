let HTML = `<div class='WdGt-fix-right-bottom-badge'><div class='BTN-BackToTop-Button BTN-BackToTop-One' id='WdGt_rdt_top_Plgin' style='display: none;'><div class='BTN-BackToTop-Inner' id='WdGt_rdt_top_Plgin'><div class='BTN-BackToTop-ImG' id='WdGt_rdt_top_Plgin'> <img id='WdGt_rdt_top_Plgin' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Top_Arrow.svg/1200px-Top_Arrow.svg.png' alt='top arrow' /></div><div class='BTN-BackToTop-Text' id='WdGt_rdt_top_Plgin'></div></div></div></div>`;
//get document height
function getDocWidgetHeight() { var D = document; return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight) }

//get scroll percentage
function amountsDisplaycrolled() { var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight; var docheight = getDocWidgetHeight(); var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop; var trackLength = docheight - winheight; var pctScrolled = Math.floor(scrollTop / trackLength * 100); return pctScrolled; }

var style = document.createElement('style');
style.innerHTML = `
.BTN-BackToTop-Button {
  padding: 4px 8px;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  border-radius: 8px;
  top: 0px;
  backface-visibility: hidden;
  background-color: rgba(17, 17, 17, 0);
  color: rgb(20, 20, 20);
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: auto;
  max-width: max-content;
}

.BTN-BackToTop-ImG {
  width: 27px;
  height: 27px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease 0s;
}

.BTN-BackToTop-ImG img {
  max-width: 25px !important;
}

.BTN-BackToTop-Text {
  display: flex;
  align-items: center;
  line-height: 13px;
  max-width: 280px;
  white-space: nowrap;
  overflow: hidden;
}

.BTN-BackToTop-Inner {
  display: flex;
  align-items: center;
}

.WdGt-fix-right-bottom-badge {
  position: fixed;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  z-index: 999999998;
}
  `;

exports.init = function (args) {
  var elem = document.createElement('div');
  elem.innerHTML = HTML;
  document.body.appendChild(elem);
  
  document.head.appendChild(style);

  window.addEventListener("scroll", function () {
    if (amountsDisplaycrolled() >= 2) {
      document.getElementById('WdGt_rdt_top_Plgin').style.display = 'block';
    }
    else {
      document.getElementById('WdGt_rdt_top_Plgin').style.display = 'none';
    }
  }, true)

  window.addEventListener('click', function (e) {
    //for redirect to top widget   
    let clk_div_id = e.target.id;
    if (!clk_div_id) { clk_div_id = e.target.closest('div').id; }
    if (clk_div_id == 'WdGt_rdt_top_Plgin') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  })
}
