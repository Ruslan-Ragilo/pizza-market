import style from './ButtonSecondary.module.scss'

interface IButtonSecondaryProps {
  colorBorder?: any
  content: string
}

const ButtonSecondary: React.FunctionComponent<IButtonSecondaryProps> = ({
  colorBorder,
  content,
}) => {
  return (
    <div className={style.btnSecondary + ' ' + style[colorBorder] || ''}>
      {content}
    </div>
  )
}

export default ButtonSecondary
