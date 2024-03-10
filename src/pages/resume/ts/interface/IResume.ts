export interface IResume {
    name: string;
    jpnname?: string;
    address: string;
    email: string;
    phone: string;
    resume: string;
    about: string;
    summary: {
        name: string;
        content: string[];
    };
    experiences: {
        name: string;
        details: IExperience[]
    };
    skills: {
        name: string;
        details: ISkill[];
    };
    languages: {
        name: string;
        details: ILanguage[];
    }
}

export interface IExperience {
    job: string;
    company: string;
    date: string;
    location: string;
    description: string;
    details: string[];
}

export interface ILanguage {
    name: string;
    level: string;
    levelNumber: number;
}

export interface ISkill {
    name: string;
    level: number;
    items: string[];
}