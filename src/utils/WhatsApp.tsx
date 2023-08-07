export function WhatsAppLink( {linkObra } : {linkObra : string}) {
  const phoneNumber = "542932535685"
  const message = `Hola, me intereso este cuadro ${linkObra}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
  
  return (
    <a className="buy-obra" href={whatsappURL} target="_blank" rel="noopener noreferrer">Comprar</a>
  )
}