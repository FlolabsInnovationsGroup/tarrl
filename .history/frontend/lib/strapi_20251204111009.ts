const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

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
    next: {
      revalidate: 3600, // Revalidate every hour (ISR)
    },
  };

  const response = await fetch(`${STRAPI_API_URL}${endpoint}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// Fetch homepage content
export async function getHomepage() {
  try {
    return await fetchAPI('/pages?filters[slug][$eq]=home&populate=deep');
  } catch (error) {
    console.error('Error fetching homepage:', error);
    return null;
  }
}

// Fetch all research tracks
export async function getResearchTracks() {
  try {
    return await fetchAPI('/research-tracks?sort=order:asc&populate=*');
  } catch (error) {
    console.error('Error fetching research tracks:', error);
    return null;
  }
}

// Fetch all benefits
export async function getBenefits() {
  try {
    return await fetchAPI('/benefits?sort=order:asc');
  } catch (error) {
    console.error('Error fetching benefits:', error);
    return null;
  }
}

export { STRAPI_API_URL };
