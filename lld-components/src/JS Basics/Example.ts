function throttle<T extends (...args: any[]) => void>(
  fn: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let waiting: boolean = false
  return (...args) => {
    if (waiting) return
    waiting = true
    setTimeout(() => {
      fn(...args)
      waiting = false
    }, limit)
  }
}

function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timerId: number
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}

function myPromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  // your code
  return new Promise((resolve, reject) => {
    const ans: T[] = []
    const total: number = promises.length
    if (total === 0) resolve([])
    let current: number = 0
    for (let i = 0; i < total; i++) {
      promises[i]
        .then((val: T) => {
          ans[i] = val
          current++
          if (current === total) {
            resolve(ans)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

type Result<T> =
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; reason: unknown }

function myPromiseAllSettled<T>(promises: Promise<T>[]): Promise<Result<T>[]> {
  return new Promise((resolve, reject) => {
    const ans: Result<T>[] = []
    const total: number = promises.length
    if (total === 0) resolve([])
    let current: number = 0
    for (let i = 0; i < total; i++) {
      promises[i]
        .then((value: T) => {
          ans[i] = { status: 'fulfilled', value }
        })
        .catch((err) => {
          ans[i] = { status: 'rejected', reason: err }
        })
        .finally(() => {
          current++
          if (current === total) {
            resolve(ans)
          }
        })
    }
  })
}

type StreamingState =
  | { status: 'fetching' }
  | { status: 'success'; data: string }
  | { status: 'failed'; error: string }

function handleState(state: StreamingState): string {
  switch (state.status) {
    case 'fetching':
      return 'Fetching Data'
    case 'success':
      return 'Data Fetched'
    case 'failed':
    default:
      return 'Data Fetc Failed'
  }
}

// Ek generic function jo kisi bhi array ka pehla element return kare
// Agar array empty ho toh undefined return kare
// Return type automatically infer ho — no any
function first<T>(arr: T[]): T | undefined {
  if (!arr || arr.length == 0) return undefined
  return arr[0]
}

// Ek function jo kisi bhi object ki specific key ki value return kare
// Constraint: key hamesha object ka valid key hona chahiye
// No any allowed

type User = { name: string; age: number }
type UserKeys = keyof User // 'name' | 'age'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: 'Gitanshu', age: 30 }
getProperty(user, 'name') // ✅ returns string
getProperty(user, 'age') // ✅ returns number
// getProperty(user, 'xyz') // ❌ compile error

// Agar T array hai → element type return karo
// Agar T array nahi hai → T wapas karo

type Flatten<T> = T extends Array<infer K> ? K : T // your code

// Usage:
type A = Flatten<string[]> // string
type B = Flatten<number[]> // number
type C = Flatten<string> // string

// Function ka pehla argument ka type extract karo

type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never // your code

// Usage:
function foo(a: string, b: number) {}
type D = FirstArg<typeof foo> // string

type LastArg<T> = T extends (...args: infer A) => any
  ? A extends [...any[], infer L]
    ? L
    : never
  : never
