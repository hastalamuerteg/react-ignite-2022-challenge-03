import { ShareLinkIcon } from '@/lib/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from './style'

interface IShareLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
}

export const ShareLink = ({ label, ...rest }: IShareLinkProps) => {
  return (
    <Link target="_blank" {...rest}>
      {label}
      <FontAwesomeIcon icon={ShareLinkIcon} />
    </Link>
  )
}
