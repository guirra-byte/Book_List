export class AppError {

  msg: string
  errorStatus: number

  constructor(msg: string, errorStatus = 400) {

    this.msg = msg,
      this.errorStatus = errorStatus
  }
}