const button = document.getElementById('chat-button');

button.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=5584999042174&text=', '_blank')
})