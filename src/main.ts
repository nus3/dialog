import './style.css'

const isDialogElement = (target: unknown): target is HTMLDialogElement => {
  return target instanceof HTMLDialogElement
}

const waitDialogAnimation = (dialog: HTMLDialogElement) =>
  Promise.allSettled(
    dialog.getAnimations().map((animation) => animation.finished),
  )

const dialog1 = async () => {
  const dialog1Button = document.getElementById('dialog1Button')
  const dialog1 = document.getElementById('dialog1')

  if (!isDialogElement(dialog1)) return

  dialog1Button?.addEventListener('click', async () => {
    await waitDialogAnimation(dialog1)

    dialog1.removeAttribute('style')
    dialog1.showModal()
    document.documentElement.style.overflow = 'hidden'
  })

  dialog1.addEventListener('close', async (e) => {
    if (isDialogElement(e.target)) {
      await waitDialogAnimation(e.target)
      dialog1.style.display = 'none'
      document.documentElement.removeAttribute('style')
    }
  })
}

const dialog2 = () => {
  const dialog2Button = document.getElementById('dialog2Button')
  const dialog2 = document.getElementById('dialog2')

  if (!isDialogElement(dialog2)) return

  dialog2Button?.addEventListener('click', () => {
    dialog2.showModal()
  })

  const dialog2Close = document.getElementById('dialog2Close')
  dialog2Close?.addEventListener('click', () => {
    dialog2.close()
  })
}

const main = async () => {
  dialog1()
  dialog2()
}

main()

// 残りやること
// フォームがあるダイアログ
