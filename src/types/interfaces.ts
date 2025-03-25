export interface NewsItemProps {
    title: string;
    imgSrc: string;
    openingText: string;
    mainText: string;
    closingText?: string;
    linkUrl?: string;
    linkText?: string;
    expanded: boolean;
    callback: () => void;
}
