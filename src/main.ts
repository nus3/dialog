import './style.css'

const isDialogElement = (target: unknown): target is HTMLDialogElement => {
  return target instanceof HTMLDialogElement
}

const waitDialogAnimation = (dialog: HTMLDialogElement) =>
  Promise.allSettled(
    dialog.getAnimations().map((animation) => animation.finished),
  )

const handleShowDialog = async (dialog: HTMLDialogElement) => {
  await waitDialogAnimation(dialog)
  dialog.removeAttribute('style')
  dialog.showModal()
  document.documentElement.style.overflow = 'hidden'
}

const handleCloseDialog = async (event: Event, dialog: HTMLDialogElement) => {
  if (isDialogElement(event.target)) {
    await waitDialogAnimation(event.target)
    dialog.style.display = 'none'
    document.documentElement.removeAttribute('style')
  }
}

const dialog1 = () => {
  const dialog1Button = document.getElementById('dialog1Button')
  const dialog1 = document.getElementById('dialog1')

  if (!isDialogElement(dialog1)) return

  dialog1Button?.addEventListener('click', () => {
    handleShowDialog(dialog1)
  })

  dialog1.addEventListener('close', (e) => {
    handleCloseDialog(e, dialog1)
  })
}

const handleForm = (dialog: HTMLDialogElement) => {
  if (dialog.returnValue !== 'submit') return

  const form = dialog.querySelector('form')
  const data = new FormData(form || undefined)
  console.info(Object.fromEntries(data.entries()))
  form?.reset()
}

const dialog2 = () => {
  const dialog2Button = document.getElementById('dialog2Button')
  const dialog2 = document.getElementById('dialog2')

  if (!isDialogElement(dialog2)) return

  dialog2Button?.addEventListener('click', () => {
    handleShowDialog(dialog2)
  })

  dialog2.addEventListener('close', async (e) => {
    handleForm(dialog2)
    handleCloseDialog(e, dialog2)
  })
}

const main = () => {
  dialog1()
  dialog2()
}

main()
