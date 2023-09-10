import profilePic from '@/../public/assets/profile.jpg'
import { useDict } from '@/dictionary/DictionaryContext'
import Image from "next/image"
import LinkedIn from '@mui/icons-material/LinkedIn'
import Github from '@mui/icons-material/GitHub'
import MyLink from '../Link/MyLink'

export default function ProfilePicWithLinks() {
    const {dict} = useDict()
    return (
        <div className='flex items-center gap-2 max-w-sm'>
            <div className=''>
                <MyLink 
                    href='https://www.linkedin.com/in/dmitry-chernyavsky-a2322b284/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        border: 'none!important'
                    }}
                >
                    <span className='block rounded-full overflow-hidden'>
                        <Image
                            src={profilePic}
                            alt={dict.name}
                        />
                    </span>
                </MyLink>
            </div>
            <div className='space-y-2'>
                <MyLink 
                    href='https://www.linkedin.com/in/dmitry-chernyavsky-a2322b284/'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >
                    <LinkedIn/>
                    <span>LinkedIn</span>
                </MyLink>
                <MyLink 
                    href='https://github.com/themrdemonized'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >
                    <Github/>
                    <span>Github</span>
                </MyLink>
            </div>
        </div>
    )
}