export interface INavLink {
    id: number;
    icon: any;
    title: string;
    link: string;
}

export type navPropsType = {
    data: INavLink[];
    className?:string;
}