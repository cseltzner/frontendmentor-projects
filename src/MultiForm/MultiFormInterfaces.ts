export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export enum Plans {
    Arcade = "Arcade",
    Advanced = "Advanced",
    Pro = "Pro"
}

export enum PlanTimeFrame {
    Monthly = "Monthly",
    Yearly = "Yearly"
}

export interface Plan {
    plan: Plans;
    planTimeFrame: PlanTimeFrame;
}

export interface AddOns {
    onlineService: boolean;
    expandedStorage: boolean;
    customizableProfile: boolean;
}

export interface SummaryData {
    personalInfo?: PersonalInfo;
    plan?: Plan;
    addons?: AddOns;
}

export type MultiformValues = PersonalInfo | Plan | AddOns | undefined;