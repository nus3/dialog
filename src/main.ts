import './style.css'

const isDialogElement = (target: unknown): target is HTMLDialogElement => {
  return target instanceof HTMLDialogElement
}

// const waitDialogAnimation = (dialog: HTMLDialogElement) =>
//   Promise.allSettled(
//     dialog.getAnimations().map((animation) => animation.finished),
//   )

const main = async () => {
  const dialog1Button = document.getElementById('dialog1Button')
  const dialog1 = document.getElementById('dialog1')

  if (!isDialogElement(dialog1)) return

  dialog1Button?.addEventListener('click', () => {
    dialog1.showModal()
  })

  const dialog1Close = document.getElementById('dialog1Close')
  dialog1Close?.addEventListener('click', () => {
    dialog1.close()
  })
}

main()

// 残りやること
// スクリーンリーダで読み込まれないようにinertをつける
// 背景がスクロールしないように
// フォームがあるダイアログ
