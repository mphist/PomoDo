onmessage = async (e) => {
  if (e && e.data) {
    if (e.data.msg === 'startTimer') {
      const id = await tic(e.data.timeElapsed, e.data.delay)
      postMessage(id)
    }
    // if (e.data.msg === 'stopTimer') {
    //   //   tic(e.data.timeElapsed, e.data.delay)
    //   //   console.log('timer started')
    //   //   postMessage('timer started')
    //   // } else if (e.data.msg === 'stopTimer') {
    //   //   console.log('timer stopped')
    //   //   postMessage('timer stopped')
    //   const id = await tic(e.data.timeElapsed, e.data.delay)
    //   postMessage(id)
    // }
  }
}

async function tic(timeElapsed, delay) {
  if (timeElapsed > -1) {
    // const start = Date.now()
    // while (Date.now() < start + delay) {}

    return new Promise((resolve) => {
      const id = setTimeout(() => resolve(id), delay)
    })
  }
}
