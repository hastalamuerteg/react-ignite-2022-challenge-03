import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './style'
import { LeftArrowIcon } from '@/lib/icons'

interface IGoBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const GoBackButton = ({ label, ...rest }: IGoBackButtonProps) => {
  return (
    <NavLink to="/posts">
      <Button type="button" {...rest}>
        <FontAwesomeIcon icon={LeftArrowIcon} />
        {label}
      </Button>
    </NavLink>
  )
}
