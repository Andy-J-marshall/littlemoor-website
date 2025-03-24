export interface NewsItemProps {
    title: string;
    imgSrc: string;
    expanded: boolean;
    openingText: string;
    mainText: string;
    closingText?: string;
    linkUrl?: string;
    linkText?: string;
    callback: () => void;
}
