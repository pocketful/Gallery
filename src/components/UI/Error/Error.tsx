import { ChildrenProps } from '../../../types/types'
import style from './Error.module.scss'

const Error = ({ children }: ChildrenProps) => {
  return <p className={style.error}>{children}</p>
}

export default Error
