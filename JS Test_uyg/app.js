let cevap_a = ["D", "D", "D", "D"];

let form = document.querySelector("form");

let bilgilendir = document.querySelector(".bilgilendir");

form.addEventListener("submit", e=>{
    e.preventDefault();
    
    let puan = 0;
    let k_cevapları = [form.S1.value,form.S2.value,form.S3.value,form.S4.value]

    k_cevapları.forEach((x,index) =>{          

        if(x===cevap_a[index]) {
            puan +=25;
        }
    })

    if(puan===0) {
        bilgilendir.style.backgroundColor = "red";
        bilgilendir.style.color = "white";
        bilgilendir.textContent = "Berbat bir puan" + " = " +puan;
  }

  if(puan===25) {
    bilgilendir.style.backgroundColor = "yellow";
    bilgilendir.style.color = "black";
    bilgilendir.textContent = "Biraz daha çalış" + " = " + puan;
  }

  if(puan===50){
    bilgilendir.style.backgroundColor = "yellow";
    bilgilendir.style.color = "black";
    bilgilendir.textContent = "Yolu yarıladın" + " = " + puan;
  }

  if(puan===75){
    bilgilendir.style.backgroundColor = "yellow";
    bilgilendir.style.color = "black";
    bilgilendir.textContent = "Yeterli bir puan" + " = " + puan;
  }

  if(puan===100){
    bilgilendir.style.backgroundColor = "green";
    bilgilendir.style.color = "black";
    bilgilendir.textContent = "Çok başarılısın" + " = " + puan;
  }
})