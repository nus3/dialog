import './style.css'

const isDialogElement = (target: unknown): target is HTMLDialogElement => {
  return target instanceof HTMLDialogElement
}

const main = () => {
  const dialog1Button = document.getElementById('dialog1Button')
  const dialog1 = document.getElementById('dialog1')

  if (!isDialogElement(dialog1)) return

  dialog1Button?.addEventListener('click', () => {
    dialog1.showModal()
  })
}

main()
