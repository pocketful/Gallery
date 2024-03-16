import { ChildrenProps } from '../../../types/types'
import style from './PhotoGrid.module.scss'

const PhotoGrid = ({ children }: ChildrenProps) => {
  return <div className={style.grid}>{children}</div>
}

export default PhotoGrid
