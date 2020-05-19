const Dboxes = {
  doorDash: "https://www.doordash.com/business/436891/?utm_source=partner-link&utm_medium=website&utm_campaign=436891"
}
const dBoxs = document.querySelectorAll('.delivery-box');

dBoxs.forEach(box => {
  box.addEventListener('click', e => {
    let ur = e.target.attributes["for"].value;
    let uril = Dboxes[ur] ? Dboxes[ur] : null;

    if(ur && uril) {
      window.open(uril, "_blank");
    }
  })
})