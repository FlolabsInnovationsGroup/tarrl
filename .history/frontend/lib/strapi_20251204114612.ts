const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ResearchTrack {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  order: number;
  icon?: string;
  shortDescription: string;
  fullDescription?: string;
  examples?: string;
  status: 'active' | 'coming-soon' | 'research';
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Benefit {
  id: number;
  documentId: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<StrapiResponse<T>> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
    cache: 'no-store', // For client-side fetching
  };

  const response = await fetch(`${STRAPI_API_URL}${endpoint}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Fetch all research tracks
export async function getResearchTracks(): Promise<ResearchTrack[]> {
  try {
    const response = await fetchAPI<ResearchTrack[]>('/research-tracks?sort=order:asc&populate=*');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching research tracks:', error);
    return [];
  }
}

// Fetch all benefits
export async function getBenefits(): Promise<Benefit[]> {
  try {
    const response = await fetchAPI<Benefit[]>('/benefits?sort=order:asc');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching benefits:', error);
    return [];
  }
}

export { STRAPI_API_URL };
