export interface ResultDataToken {
  token: string
}

export interface Result<T = any> {
  code: number
  data: T
  msg: string
}

export namespace Login {
  export interface params {
    userName: string
    passPwd: string
  }
}
