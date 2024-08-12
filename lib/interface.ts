export interface ButtonProps {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  onClick?: any;
}

export interface PageIntroProps {
  heading: string;
  copy: string;
}

export interface OwnerProps {
  heading?: string;
  copy?: string;
  reverse?: string;
}

export interface BlogSectionProps {
  blogData: any;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreviewProps {
  mapData: BlogData;
  key: number;
}
