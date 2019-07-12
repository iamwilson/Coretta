export interface IAppSharedProps {
    history: any;
    language: any;
    location: any;
    match: any;
    staticContext: any;

    triggerAlert: (msg: string, type?: any) => void;
}
