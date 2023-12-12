// Define types for the JSON response structure

type JobListing = {
    ad_id: number;
    ad_type: number;
    canonical_url: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    deadline: number;
    extras: any[]; // Update this type according to the structure of extras if needed
    flags: any[]; // Update this type according to the structure of flags if needed
    heading: string;
    id: string;
    job_title: string;
    labels: Array<{
        id: string;
        text: string;
        type: string;
    }>;
    location: string;
    main_search_key: string;
    no_of_positions: number;
    published: number;
    timestamp: number;
    type: string;
};

export type Filter = {
    // Define the structure of the Filter object based on your data
};

export type Metadata = {
    params: { q: string[], page: string[] };
    search_key: string;
    num_results: number;
    quest_time: number;
    solr_time: number;
    // Add other metadata properties as needed
};

export type PageMetadata = {
    title: string;
    description: string;
    indexDirective: string;
    canonicalUrl: string;
    openGraphUrl: string;
    // Add other page metadata properties as needed
};

export type PromotedAd = {
    type: string;
    id: string;
    main_search_key: string;
    heading: string;
    location: string;
    // Add other promoted ad properties as needed
};

export type JobSearchResponse = {
    docs: JobListing[];
    filters: Filter[];
    mapUrl: string;
    metadata: Metadata;
    newMapUrl: string;
    pageMetadata: PageMetadata;
    promotedAd: PromotedAd;
    resultHeading: string;
};
