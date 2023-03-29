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

  dialog2Button?.addEventListener('click', async () => {
    await waitDialogAnimation(dialog2)

    dialog2.removeAttribute('style')
    dialog2.showModal()
    document.documentElement.style.overflow = 'hidden'
  })

  dialog2.addEventListener('close', async (e) => {
    if (dialog2.returnValue === 'submit') {
      const data = new FormData(dialog2.querySelector('form') || undefined)
      console.info(Object.fromEntries(data.entries()))
    }

    if (!isDialogElement(e.target)) return

    await waitDialogAnimation(e.target)
    dialog2.style.display = 'none'
    document.documentElement.removeAttribute('style')
  })
}

const main = () => {
  dialog1()
  dialog2()
}

main()

// 残りやること
// 共通な処理を一つにまとめる
// closeした際にremoveEventListenerする？
