// Last updated: 4/8/2026, 2:05:30 AM
async function sleep(millis: number): Promise<void> {
    await new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(millis)
        }, millis)
    })
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */