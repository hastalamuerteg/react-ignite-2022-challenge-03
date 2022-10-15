import {
  ProfileCard,
  ProfileImage,
  ProfileContent,
  ProfileContactInformation,
  ProfileContact,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShareLink } from '@/components/ShareLink'
import { IUser } from '@/interfaces/user'
import { BuildingIcon, UserGroupIcon, GithubIcon } from '@/lib/icons'

export const Profile = ({ user }: { user: IUser }) => {
  return (
    <ProfileCard>
      <ProfileImage src={user.avatar_url} alt={user.name} />

      <ProfileContent>
        <strong>{user.name}</strong>

        <ShareLink label="Github" href={user.html_url} />

        <p>{user.bio}</p>

        <ProfileContactInformation>
          <ProfileContact>
            <FontAwesomeIcon icon={GithubIcon} />
            <span>{user.login}</span>
          </ProfileContact>

          <ProfileContact>
            <FontAwesomeIcon icon={BuildingIcon} />
            <a href={user.company} rel="nofollow noreferrer" target="_blank">
              Website
            </a>
          </ProfileContact>

          <ProfileContact>
            <FontAwesomeIcon icon={UserGroupIcon} />
            <span>
              {user.followers}{' '}
              {user.followers === 1 ? 'seguidor' : 'seguidores'}
            </span>
          </ProfileContact>
        </ProfileContactInformation>
      </ProfileContent>
    </ProfileCard>
  )
}
