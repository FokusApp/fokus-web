import { ComponentProps } from '~/types';

export interface PageProps extends ComponentProps {
    title?: string;
    description?: string;
    keywords?: string | Array<string> | null;
    exactUrl?: string;
    siteType?: 'todo' | 'website' | 'opensource';
}
