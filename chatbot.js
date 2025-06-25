function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const response = getResponse(message.toLowerCase());
    addMessage("bot", response);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(message) {
  if (message.includes("serviço") || message.includes("serviços")) {
    return "Oferecemos serviços como design gráfico, edição de vídeo e foto, produção musical, desenvolvimento web, aulas e muito mais! Confira nossa página de serviços: https://studiomiwhastonpro.my.canva.site/com/#pagina-de-serviços";
  }

  if (message.includes("preço") || message.includes("custo")) {
    return "Os preços podem variar e são atualizados com frequência. Recomendamos acessar a nossa página de serviços para informações atualizadas.";
  }

  if (message.includes("pagamento")) {
    return "Confira os métodos de pagamento completos aqui: https://xcr725th.forms.app/formulario-de-identificacao-e-pagamento-1";
  }

  if (message.includes("canal")) {
    return "Siga nosso canal no WhatsApp para receber atualizações: https://whatsapp.com/channel/0029VayXpRH4dTnF74uw7801";
  }

  if (message.includes("quero ser cliente") || message.includes("cadastro")) {
    return "Torne-se cliente agora mesmo acessando: https://xcr725th.forms.app/torne-si-cliente";
  }

  return "Desculpe, não entendi muito bem... Poderia reformular ou perguntar sobre serviços, pagamentos ou como se tornar cliente?";
}
