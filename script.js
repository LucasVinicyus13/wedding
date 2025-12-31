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
telefoneInput.addEventListener("input", validateForm)

// Form submission
confirmationForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    nome: nomeInput.value,
    telefone: telefoneInput.value,
    confirmacao: selectedOption,
  }

  console.log("Dados do formulário:", formData)
  alert("Confirmação enviada com sucesso! Obrigado.")

  // Reset form
  confirmationForm.reset()
  confirmButtons.forEach((btn) => btn.classList.remove("active"))
  selectedOption = ""
  validateForm()
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
