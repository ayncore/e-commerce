export interface NavbarLink {
    text: string;
    url: string;
}

export const navbarLinks: NavbarLink[] = [
    { text: 'Home', url: '/' },
    { text: 'Women', url: '/women' },
    { text: 'Men', url: '/men' },
    { text: 'Category', url: '/category' },
    { text: 'Collections', url: '/collections' },
    { text: 'Support', url: '/support' }
];