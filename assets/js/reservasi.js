const invoiceDialog = document.getElementById("invoice-dialog");
const invoiceForm = document.getElementById("invoice-form");

const invoiceModal = document.getElementById('invoiceModal')

const cekFormContent = document.getElementById("modal-cekform-content");
const cekFormLoading = document.getElementById("modal-cekform-loading");
const invoiceContent = document.getElementById('modal-invoice-content')

const stamp = document.getElementById('stamp')
const stampCancelled = document.getElementById('cancelled-stamp')

const masagaransiOUTPUT = document.getElementById('masagaransi-output')
const tanggalselesaiOUTPUT = document.getElementById('tanggalselesai-output')

const dismissModals = document.querySelectorAll('[data-bs-dismiss="modal"]')



invoiceForm.addEventListener("submit", onSub);

async function processing(msDuration) {
  if (typeof msDuration !== "number") return;

  const promisee = new Promise((res, rej) => {

    // let finalStatus = "finished";
    // let finalStatus = "inProgress";
    let finalStatus = "cancelled";

    let status = "error";
    setTimeout(() => {
      status = finalStatus;
    }, msDuration - 100);

    setTimeout(() => {
      if (status === "finished" || status === "inProgress" || status === 'cancelled') {
        res(status);
      } else {
        rej(status);
      }
    }, msDuration);
  });

  const response = promisee.then((res) => res).catch((err) => err);

  return response;
}

async function onSub(e) {
  e.preventDefault();

  cekFormContent.classList.add("d-none");
  cekFormLoading.classList.remove("d-none");

  const result = await processing(5000000000000000000).then((res) => res);
  
  if(result === "finished" || result === "inProgress" || result === 'cancelled'){

  const successSvg = "../../img/success.svg"
  const processSvg = "../../img/process.svg"
  const cancelledSvg = "../../img/cancelled.svg"

  cekFormLoading.classList.add("d-none");
  invoiceDialog.classList.add("modal-invoice-result");
  invoiceDialog.classList.remove("modal-cekform");
  invoiceDialog.classList.add('modal-invoice-result');
  
  // insert value here =====

    masagaransiOUTPUT.innerText = 'Cek Setelah Selesai'
    tanggalselesaiOUTPUT.innerText = '-'

  //=======


  invoiceContent.classList.remove('d-none')
  stamp.classList.remove('d-none', 'cancelled') 

  if (result === "finished") {
    
    stamp.src = successSvg

  } else if (result === "inProgress") {

    stamp.src = processSvg
  }
  else if(result === "cancelled"){

    masagaransiOUTPUT.innerText = ''
    tanggalselesaiOUTPUT.innerText = ''

    stamp.classList.add('cancelled')
    stamp.src = cancelledSvg
  }
  }
}


dismissModals.forEach(element => {

  element.addEventListener('click', () => {

  cekFormContent.classList.remove("d-none");
  cekFormLoading.classList.add("d-none")

  invoiceDialog.classList.remove("modal-invoice-result");
  invoiceDialog.classList.add("modal-cekform");
  invoiceDialog.classList.remove('modal-invoice-result');

  invoiceContent.classList.add('d-none')
  stamp.classList.add('d-none', 'cancelled') 

  masagaransiOUTPUT.innerText = 'Cek Setelah Selesai'
  tanggalselesaiOUTPUT.innerText = '-'

  
  })
});

invoiceModal.addEventListener('click', () => {

  if (!e.target.closest(".modal-content")) {

  cekFormContent.classList.remove("d-none");
  cekFormLoading.classList.add("d-none");

  invoiceDialog.classList.remove("modal-invoice-result");
  invoiceDialog.classList.add("modal-cekform");
  invoiceDialog.classList.remove('modal-invoice-result');

  invoiceContent.classList.add('d-none')
  stamp.classList.add('d-none', 'cancelled') 

  masagaransiOUTPUT.innerText = 'Cek Setelah Selesai'
  tanggalselesaiOUTPUT.innerText = '-'

  }
})