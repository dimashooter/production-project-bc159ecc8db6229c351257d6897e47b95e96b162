import { EditableProfileCard } from '@/features/EditableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return <Text text={t('no_id')} />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
