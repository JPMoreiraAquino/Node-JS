const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('Estou ouvindo', message)
})

ev.emit('saySomething', "Mensagem")
ev.emit('saySomething', 'salve')
ev.emit('saySomething', 'otarios')
ev.emit('saySomething', "vacilao")