export interface ICountryDataArray {
    data: ICountryData[];
}
export interface ICountryData {
    name: string;
    code: string;
    population: number;
    updated_at: string;
    today: IToday;
    latest_data: ILatest_data;
    timeline: ITimeline[];
}
export interface IToday {
    deaths: number;
    confirmed: number;
}
export interface ILatest_data {
    deaths: number;
    confirmed: number;
    recovered: number;
    critical: number;
    calculated: ICalculated;
}

export interface ICalculated {
    death_rate: number;
    recovery_rate: number;
    recovered_vs_death_ratio: number;
    cases_per_million_population: number;
}

export interface ITimeline {
    updated_at: string;
    date: string;
    deaths: number;
    confirmed: number;
    recovered: number;
    active: number;
    new_confirmed: number;
    new_recovered: number;
    new_deaths: number;
    is_in_progress: boolean;
}