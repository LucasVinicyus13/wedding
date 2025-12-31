// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Confirmation form
const confirmationForm = document.getElementById("confirmation-form")
const nomeInput = document.getElementById("nome")
const telefoneInput = document.getElementById("telefone")
const submitBtn = document.getElementById("submit-btn")
let selectedOption = ""

// Phone mask function
function applyPhoneMask(value) {
  // Remove tudo que não é número
  value = value.replace(/\D/g, "")

  // Limita a 11 números
  value = value.substring(0, 11)

  // Aplica a máscara (XX) XXXXX-XXXX
  if (value.length <= 2) {
    value = value.replace(/^(\d{0,2})/, "($1")
  } else if (value.length <= 7) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2")
  } else {
    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
  }

  return value
}

// Apply mask on telefone input
telefoneInput.addEventListener("input", function (e) {
  const cursorPosition = this.selectionStart
  const previousLength = this.value.length

  this.value = applyPhoneMask(this.value)

  const newLength = this.value.length
  const lengthDiff = newLength - previousLength

  // Ajusta a posição do cursor
  this.setSelectionRange(cursorPosition + lengthDiff, cursorPosition + lengthDiff)

  validateForm()
})

// Prevent non-numeric input
telefoneInput.addEventListener("keypress", (e) => {
  // Permite apenas números, backspace, delete, e teclas de navegação
  const charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    e.preventDefault()
  }
})

// Handle confirmation buttons
const confirmButtons = document.querySelectorAll("[data-option]")
confirmButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    confirmButtons.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    this.classList.add("active")

    // Store selected option
    selectedOption = this.dataset.option

    // Check if form is valid
    validateForm()
  })
})

// Validate form
function validateForm() {
  const isValid = nomeInput.value.trim() !== "" && telefoneInput.value.trim() !== "" && selectedOption !== ""

  submitBtn.disabled = !isValid
}

// Add input listeners
nomeInput.addEventListener("input", validateForm)

// Form submission
confirmationForm.addEventListener("submit", async (e) => {
  e.preventDefault()

  // Added loading state and Google Sheets integration
  submitBtn.disabled = true
  submitBtn.textContent = "Enviando..."

  const formData = {
    nome: nomeInput.value,
    telefone: telefoneInput.value,
    confirmacao: selectedOption,
    timestamp: new Date().toLocaleString("pt-BR"),
  }

  try {
    // TODO: Substitua esta URL pela URL do seu Google Apps Script
    const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    // No-cors mode doesn't allow reading the response, so we assume success
    console.log("Dados enviados:", formData)
    alert("Confirmação enviada com sucesso! Obrigado.")

    // Reset form
    confirmationForm.reset()
    confirmButtons.forEach((btn) => btn.classList.remove("active"))
    selectedOption = ""
    validateForm()
  } catch (error) {
    console.error("Erro ao enviar dados:", error)
    alert("Erro ao enviar confirmação. Por favor, tente novamente.")
  } finally {
    submitBtn.disabled = false
    submitBtn.textContent = "Confirmar Presença"
  }
})

// Modal functions
function openModal(modalType) {
  const modal = document.getElementById("modal-" + modalType)
  if (modal) {
    modal.classList.add("show")
    document.body.style.overflow = "hidden"
  }
}

function closeModal(modalType) {
  const modal = document.getElementById("modal-" + modalType)
  if (modal) {
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  }
}

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("show")
      document.body.style.overflow = "auto"
    }
  })
})

// Toast notification
function showToast(message) {
  const toast = document.getElementById("toast")
  const toastMessage = document.getElementById("toast-message")

  toastMessage.textContent = message
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 5000)
}

// Copy Pix key
async function copyPixKey(pixKey) {
  try {
    await navigator.clipboard.writeText(pixKey)
    showToast("Chave Pix copiada para a área de transferência!")
  } catch (err) {
    console.error("Failed to copy:", err)
    showToast("Erro ao copiar chave Pix")
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.getElementById("header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})
