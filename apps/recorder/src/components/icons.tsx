import { JSX } from "solid-js";

export const IconCapFile = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>` }} />
);

export const IconCapCopy = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} dangerouslySetInnerHTML={{ __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 7.5V4.375C7.5 3.33947 8.33947 2.5 9.375 2.5H15.625C16.6605 2.5 17.5 3.33947 17.5 4.375V10.625C17.5 11.6605 16.6605 12.5 15.625 12.5H12.5M10.625 7.5H4.375C3.33947 7.5 2.5 8.33947 2.5 9.375V15.625C2.5 16.6605 3.33947 17.5 4.375 17.5H10.625C11.6605 17.5 12.5 16.6605 12.5 15.625V9.375C12.5 8.33947 11.6605 7.5 10.625 7.5Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` }} />
);

export const IconCapLink = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>` }} />
);

export const IconCapChevronDown = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} dangerouslySetInnerHTML={{ __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8L8.93934 10.9393C9.52513 11.5251 10.4749 11.5251 11.0607 10.9393L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` }} />
);

export const IconCapCircleX = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} dangerouslySetInnerHTML={{ __html: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 7.5L7.5 12.5M12.5 12.5L7.5 7.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>` }} />
);
