const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_8ir1jo9';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'ENVIAR COMENTARIO';
        alert('MENSAJE ENVIADO EXITOSAMENTE!');
        document.getElementById('form').reset();
    }, (err) => {
        btn.value = 'ENVIAR COMENTARIO';
        alert(JSON.stringify(err));
    });
});